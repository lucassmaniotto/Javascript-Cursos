const { alfabeto } = require('./base')

// [abc] - Conjunto [^] - Negação
console.log(alfabeto.match(/[abc]/g)); // retorna todas as ocorrências de a, b ou c
console.log(alfabeto.match(/[^abc]/g)); // retorna todas as ocorrências que não sejam a, b ou c
console.log('-------------------');

// [0-9] - Range
console.log(alfabeto.match(/[0-9]/g)); // retorna todas as ocorrências de 0 até 9
console.log('-------------------');
// [^0-9] - Negação de Range
console.log(alfabeto.match(/[^0-9]/g)); // retorna todas as ocorrências que não sejam de 0 até 9
console.log('-------------------');

// [A-Z] - Range
console.log(alfabeto.match(/[A-Z]/g)); // retorna todas as ocorrências de A até Z
console.log('-------------------');

// [^A-Z] - Negação de Range
console.log(alfabeto.match(/[^A-Z]/g)); // retorna todas as ocorrências que não sejam de A até Z
console.log('-------------------');

// [A-z] - Range (minúsculas e maiúsculas)
console.log(alfabeto.match(/[A-z]/g)); // retorna todas as ocorrências de A até Z e de a até z
console.log('-------------------');

// [A-z0-9] - Range (minúsculas, maiúsculas e números)
console.log(alfabeto.match(/[A-z0-9]/g)); // retorna todas as ocorrências de A até Z, de a até z e de 0 até 9
console.log('-------------------');

// [\u00A0-\u00BA] - Range (unicode)
console.log(alfabeto.match(/[\u00A0-\u00BA]/g)); // retorna todas as ocorrências de unicode

// \w - [a-zA-Z0-9À-ú_]
// \W - [^a-zA-Z0-9À-ú_]
// \d - [0-9]
// \D - [^0-9]
// \s - [ \t\n\r\f]
// \S - [^ \t\n\r\f]
// \n - quebra de linha
// \t - tabulação
// \r - carriage return
// \f - form feed
// \0 - null
// \v - vertical tab
// \xhh - hexadecimal
// \uhhhh - unicode
// \cX - control X