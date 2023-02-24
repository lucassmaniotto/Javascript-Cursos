const name = prompt('Qual é o seu nome completo?');

document.body.innerHTML = `Seu nome é ${name} <br />`;

const nameWithoutSpaceLength = name.replace(/ /g, '').length;

document.body.innerHTML += `Seu nome tem ${nameWithoutSpaceLength} letras <br />`;

const secondLetter = name.slice(1, 2);

document.body.innerHTML += `A segunda letra do seu nome é ${secondLetter} <br />`;

document.body.innerHTML += `Qual o primeiro índice da letra "${secondLetter}" no seu nome? ${name.indexOf(secondLetter)} <br />`;

document.body.innerHTML += `Qual o último índice da letra "${secondLetter}" no seu nome? ${name.lastIndexOf(secondLetter)} <br />`;

const threeLastLetters = name.slice(-3);

document.body.innerHTML += `As últimas 3 letras do seu nome são: ${threeLastLetters} <br />`;

const wordsinName = name.split(' ');

document.body.innerHTML += `As palavras do seu nome são: ${wordsinName} <br />`;

document.body.innerHTML += `Seu nome com letras maiúsculas: ${name.toUpperCase()} <br />`;

document.body.innerHTML += `Seu nome com letras minúsculas: ${name.toLowerCase()} <br />`;