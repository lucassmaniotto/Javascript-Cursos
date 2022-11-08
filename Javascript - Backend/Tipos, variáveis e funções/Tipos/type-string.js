// strings

console.log("Hello World!");
console.log('Olá mundo!');

const password = "hypersecurepassword123";
const numbers = "123456789";

const quoteGandalf = 'Gandalf said: "You shall not pass!"'
const quoteSideous = "\nPalpatine said: 'UNLIMITED POWER!'"
console.log(quoteGandalf, quoteSideous);

// concatenation (+)
console.log();

const conca = "My name is "
const tenation = "Luke Skywalker"
console.log(conca + tenation);

// unicode
console.log();

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const check = '\u2705'
const hiragana = '\u3041'

console.log(cifrao);
console.log(aMaiusculo);
console.log(check);
console.log(hiragana);

// string manipulation -> method and property
console.log()

const city = "belo horizonte";
const input = "Belo Horizonte";

console.log(city === input);
const newInput = input.toLowerCase();
console.log(city === newInput);

console.log(password.length);


// template string OR template literal