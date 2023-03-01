// método filter() - filtra os elementos de um array e retorna um novo array
//
// filter(/* callback */)
// callback - função que será executada para cada elemento do array
// callback - recebe 3 parâmetros: valor, índice e array (valor é obrigatório)
// callback - deve retornar um valor booleano (true ou false)
// filter() - retorna um novo array com os elementos que retornaram true na callback

console.log('-----------------------------------------------------------------------------');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ['João', 'Maria', 'José', 'Antônio', 'Miguel'];

console.log('Numeros maiores que 5:');
const numbersGreaterThanFive = numbers.filter(number => number > 5);
console.log(numbersGreaterThanFive.join(', '));

console.log('Nomes com 5 letras:');
const namesWithFiveLetters = names.filter(name => name.length === 5);
console.log(namesWithFiveLetters.join(', '));

console.log('-----------------------------------------------------------------------------');

const numbersAndNames = [...numbers, ...names];

console.log('Numeros maiores que 5 e nomes maiores que 5 letras:');
const numbersAndNamesGreaterThanFive = numbersAndNames.filter(item => item > 5 || item.length > 5);
console.log(numbersAndNamesGreaterThanFive.join(', '));

console.log('-----------------------------------------------------------------------------');

const people = [
    { name: 'João', age: 18 },
    { name: 'Maria', age: 20 },
    { name: 'José', age: 21 },
    { name: 'Antônio', age: 19 },
    { name: 'Miguel', age: 17 }
];

console.log('Pessoas com 5 letras ou mais:');
const peopleWithFiverLeettersOrMore = people.filter(person => person.name.length >= 5);
console.log(peopleWithFiverLeettersOrMore);
console.log(peopleWithFiverLeettersOrMore.map(person => person.name).join(', '));

console.log('Pessoas com 18 anos ou mais:');
const peopleOverEighteenYearsOld = people.filter(person => person.age > 18);
console.log(peopleOverEighteenYearsOld);
console.log(peopleOverEighteenYearsOld.map(person => `${person.name} - ${person.age}`).join(', '));

console.log('Pessoas cujo nome termina com "a"');
// const peopleWithLetterAAsLastLetter = people.filter(person => person.name.charAt(person.name.length - 1) === 'a');
const peopleWithLetterAAsLastLetter = people.filter(person => person.name.toLowerCase().endsWith('a'));
console.log(peopleWithLetterAAsLastLetter);
console.log(peopleWithLetterAAsLastLetter.map(person => person.name).join(', '));

console.log('-----------------------------------------------------------------------------');

console.log('Array original:');
console.log(people);
