const controlAjustment = document.querySelectorAll('[data-controle]');
const controlCount = document.querySelectorAll('[data-contador]');
const stats = document.querySelectorAll('[data-estatistica]');

const pieces = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controlAjustment.forEach((control) => {
    control.addEventListener('click', (event) => {
        manipulateData(event.target.dataset.controle, event.target.parentNode);
        updateStats(event.target.dataset.peca, event.target.dataset.controle);
    });
});

function manipulateData(operation, control) {
    const piece = control.querySelector('[data-contador]');

    if(operation === '+') {
        piece.value = parseInt(piece.value) + 1;
    }
    else if(operation === '-') {
        piece.value = parseInt(piece.value) - 1;
    }
}

function updateStats(piece, operation) {
    if(operation === '+') {
        stats.forEach((stat) => {
            stat.textContent = parseInt(stat.textContent) + pieces[piece][stat.dataset.estatistica];
        });
    }
    else if(operation === '-') {
        stats.forEach((stat) => {
            stat.textContent = parseInt(stat.textContent) - pieces[piece][stat.dataset.estatistica];
        });
    }
}