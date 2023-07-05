const { text, files } = require('./base')

// * - zero ou mais
// + - uma ou mais
// ? - zero ou uma

const regex = /Lo*/gi
// retorna todas as ocorrências de L seguidas de zero ou mais ocorrências de o
console.log(text.match(regex));
console.log('-------------------');

const regex2 = /Lo+/gi
// retorna todas as ocorrências de L seguidas de uma ou mais ocorrências de o
console.log(text.match(regex2));
console.log('-------------------');

const regex3 = /Lo?/gi
// retorna todas as ocorrências de L seguidas de zero ou uma ocorrência de o
console.log(text.match(regex3));
console.log('-------------------');

//---------------------------------------------- //

// \ - caractere de escape

const regExp = /\.js/gi
// retorna todas as ocorrências de .js
for (const file of files) {
    if (file.match(regExp)) {
        console.log(file);
    }
}
console.log('-------------------');

const regExp2 = /\.(js|scss)/gi
// retorna todas as ocorrências de .js ou .scss
for (const file of files) {
    if (file.match(regExp2)) {
        console.log(file);
    }
}
console.log('-------------------');

const regExp3 = /\.(jpe?g|png)/gi
// retorna todas as ocorrências de .jpeg, .jpg ou .png
for (const file of files) {
    if (file.match(regExp3)) {
        console.log(file);
    } else {
        continue
    }
}
console.log('-------------------');

// {n, m} - de n até m , no minimo n e no máximo m
// {n, } - de n até o infinito e no minimo n
// {, m} - de zero até m, no máximo m
// {n} - exatamente n

const regex4 = /en{1,}t/gi
// retorna todas as ocorrências de en seguidas de no mínimo uma ocorrência de n e uma ocorrência de t
console.log(text.match(regex4));
console.log('-------------------');

const regex5 = /re{2}d/gi
// retorna todas as ocorrências de en seguidas de duas ocorrências de n e uma ocorrência de d
console.log(text.match(regex5));
console.log('-------------------');

const regex6 = /en{0,1}t/gi
// retorna todas as ocorrências de en seguidas de zero ou uma ocorrência de n e uma ocorrência de t
console.log(text.match(regex6));
console.log('-------------------');

const regex7 = /\.((jp|JP)(e|E)?(g|G))/g
// retorna todas as ocorrências de .jpg, .jpeg, .jpEg, .jpEG, .Jpeg, .Jpeg, .JpEg, .JpEG
for (const file of files) {
    if (file.match(regex7)) {
        console.log(file);
    } else {
        continue
    }
}
console.log('-------------------');
