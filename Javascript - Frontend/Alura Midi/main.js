function playSound(audioSelector) {
    const element = document.querySelector(audioSelector);
    if (element != null && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Element not found or selector is not an audio element');
    }
}

const keysList = document.querySelectorAll('.tecla');

for (let i = 0; i < keysList.length; i++) {
    const key = keysList[i];
    const note = key.classList[1];
    const idAudio = `#som_${note}`;
    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            key.classList.add('ativa');
        }
    }
    
    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
}