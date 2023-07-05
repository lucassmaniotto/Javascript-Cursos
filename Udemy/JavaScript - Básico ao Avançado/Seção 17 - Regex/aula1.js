const { text } = require('./base')

// g - global: encontra todas as ocorrências
// i - insensitive: ignora maiúsculas e minúsculas

const gRegex = /Rebel/g;
const giRegex = /rEbEl/gi;

// testa se existe a palavra Rebel
console.log(gRegex.test(text));
console.log('-------------------');

// retorna todas as ocorrências de Rebel ignorando maiúsculas e minúsculas
console.log(text.match(giRegex));
console.log('-------------------');

// retorna a primeira ocorrência de Rebel
console.log(gRegex.exec(text));
console.log('-------------------');

// () - group: agrupa uma sequência de caracteres
// | - ou: retorna a primeira ocorrência de uma das opções

const groupRegex = /(DEATH STAR|Rebel|Galactic Empire)(, an armored space)/;
const found = groupRegex.exec(text);
if (found) {
    console.log(found[0]); // retorna a primeira ocorrência
    console.log(found[1]); // retorna a segunda ocorrência
    console.log(found[2]); // retorna a terceira ocorrência
}
console.log('-------------------');
