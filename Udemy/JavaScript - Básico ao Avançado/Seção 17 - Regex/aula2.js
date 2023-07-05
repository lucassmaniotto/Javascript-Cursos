const { text } = require('./base')

// substitui todas as ocorrências de Empire e Death por Federation
console.log(text.replace(/Empire|Death/gi, 'Federation'));

// (...)(...)(...) - $1, $2, $3: substitui as ocorrências por grupos

// substitui todas as ocorrências de Empire e Death por "Empire" e "Death"
console.log(text.replace(/(Empire|Death)/gi, '"$1"'));
// substitui todas as ocorrências de Empire e Death por EMPIRE e DEATH
console.log(text.replace(/(Empire|Galactic|Leia|Rebel)/gi, function(input) {
    return input.toUpperCase();
}));