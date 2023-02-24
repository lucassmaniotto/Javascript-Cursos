const number = Number(prompt('Digite um número'));
const numberInSpan = document.querySelector('#number');

numberInSpan.innerHTML = number;

document.body.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(number)}</p>`;

document.body.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number) ? 'Sim' : 'Não'}</p>`;

document.body.innerHTML += `<p>É NaN: ${Number.isNaN(number) ? 'Sim' : 'Não'}</p>`;

document.body.innerHTML += `<p>Arredondando para baixo: ${Math.floor(number)}</p>`;

document.body.innerHTML += `<p>Arredondando para cima: ${Math.ceil(number)}</p>`;

document.body.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;