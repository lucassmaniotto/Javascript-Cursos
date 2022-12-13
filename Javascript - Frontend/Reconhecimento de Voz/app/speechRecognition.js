window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const guessElement = document.querySelector('#guess');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    const guess = event.results[0][0].transcript;
    showGuessOnScreen(guess);
}

function showGuessOnScreen(guess) {
    guessElement.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${guess}</span>
    `
}