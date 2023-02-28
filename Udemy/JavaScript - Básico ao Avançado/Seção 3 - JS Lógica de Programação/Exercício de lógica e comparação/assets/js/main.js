const form = document.querySelector('#form');

form.addEventListener('submit', handleIMC);

function handleIMC(event) {
    event.preventDefault();

    const weight = document.querySelector('#weight');
    const height = document.querySelector('#height');

    const weightValue = parseFloat(weight.value.replace(',', '.'));
    const heightValue = parseFloat(height.value.replace(',', '.'));

    
    if (weightValue <= 0 || heightValue <= 0) {
        setResults('Preencha os campos com números inteiros!', false);
        clearFields();
        return;
    } else if (isNaN(weightValue) || isNaN(heightValue)) {
        setResults('Preencha os campos corretamente!', false);
        clearFields();
        return;
    }

    const imc = getIMC(weightValue, heightValue);

    const levelIMC = getLevelIMC(imc);

    const msg = `Seu IMC é ${imc} (${levelIMC}).`;

    setResults(msg, true);
    clearFields();
}

function setResults(msg, isValid) {
    const result = document.querySelector('#result');
    const container = document.querySelector('.container__result');

    result.innerHTML = '';
    container.classList.remove('hide');

    const p = document.createElement('p');

    const classResult = isValid ? 'p-result' : 'p-result--error';
    p.classList.add(classResult);

    p.innerHTML = msg;
    result.appendChild(p);
}

function getIMC(weight, height) {
    const imc = weight / height ** 2;
    return imc.toFixed(2);
}

function getLevelIMC(imc) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return level[5];
    if (imc >= 34.9) return level[4];
    if (imc >= 29.9) return level[3];
    if (imc >= 24.9) return level[2];
    if (imc >= 18.5) return level[1];
    if (imc < 18.5) return level[0];
}

function clearFields() {
    const weight = document.querySelector('#weight');
    const height = document.querySelector('#height');

    weight.value = '';
    height.value = '';
}
