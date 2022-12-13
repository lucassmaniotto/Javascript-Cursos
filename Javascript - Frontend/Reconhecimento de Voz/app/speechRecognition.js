window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const guessElement = document.querySelector('#guess');
const playAgainButton = document.querySelector('#play-again');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

function onSpeak(event) {
    const guess = event.results[0][0].transcript;
    showGuessOnScreen(guess);
    verifyValidGuess(guess);
}

function showGuessOnScreen(guess) {
    guessElement.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${guess}</span>
    `;
}

function verifyValidGuess(guess) {
    const number = +guess;
    if (invalidGuess(number)) {
        guessElement.innerHTML += `<div>Isso não é um número válido!</div>`;
        return;
    }
    if (guessHigherOrLowerThanAllowed(number)) {
        guessElement.innerHTML += `<div>Chute um número entre ${minValue} e ${maxValue}</div>`;
        return;
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2 class="title">Você acertou!</h2>
            <h3 class="subtitle text-shadow">O número era ${secretNumber}</h3>
            <button class="play-again" id="play-again" onclick="playAgain();">Jogar novamente</button>
        `;
    }
    else if (number > secretNumber) {
        guessElement.innerHTML += `<div class="message-text">O número secreto é menor que ${number} <i class="fa-solid fa-down-long icon"></i></div>`;
    }
    else {
        guessElement.innerHTML += `<div class="message-text">O número secreto é maior que ${number} <i class="fa-solid fa-up-long icon"></i></div>`;
    }
}

function invalidGuess(number) {
    return Number.isNaN(number);
}

function guessHigherOrLowerThanAllowed(number) {
    return number < minValue || number > maxValue;
}

function playAgain() {
    window.location.reload();
}