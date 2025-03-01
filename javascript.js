function convertToSpeech() {
    const inputText = document.getElementById('inputText').value;
    const outputSpeech = document.getElementById('outputSpeech');
    const language = document.getElementById('language').value;

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(inputText);

    utterance.lang = language;

    synth.speak(utterance);

    outputSpeech.textContent = inputText;
    outputSpeech.style.opacity = 1;
    outputSpeech.style.animation = 'fadeInUp 0.5s ease';
}

let recognition;

function startSpeechToText() {
    recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = document.getElementById('language').value;
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = function (event) {
        const result = event.results[event.results.length - 1];
        const transcript = result[0].transcript;

        document.getElementById('outputText').textContent = transcript;
        document.getElementById('outputText').style.opacity = 1;
        document.getElementById('outputText').style.animation = 'fadeInUp 0.5s ease';
    };

    recognition.start();
}

function stopSpeechToText() {
    if (recognition) {
        recognition.stop();
    }
}