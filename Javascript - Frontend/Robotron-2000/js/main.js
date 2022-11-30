const controlAjustment = document.querySelectorAll('.controle-ajuste');

controlAjustment.forEach((control) => {
    control.addEventListener('click', (event) => {
        manipulateData(event.target.textContent, event.target.parentNode);
    });
});

function manipulateData(operation, control) {
    const piece = control.querySelector('.controle-contador');

    if(operation === '+') {
        piece.value = parseInt(piece.value) + 1;
    } 
    else if(operation === '-') {
        piece.value = parseInt(piece.value) - 1;
    }
}