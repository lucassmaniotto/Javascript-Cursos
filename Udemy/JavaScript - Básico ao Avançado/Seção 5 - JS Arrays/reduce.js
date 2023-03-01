// método reduce - reduz o array a um único valor
//
// * Não altera o array original
// * Retorna um novo array com os elementos alterados
// * Parâmetros: acumulador, valor atual, índice atual, array original

console.log('-----------------------------------------------------------------------------');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* 
const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0); 
*/

const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log('Soma dos números:');
console.log(total);

console.log('-----------------------------------------------------------------------------');

const pairs = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) accumulator.push(currentValue);
    return accumulator;
}, []);

console.log('Números pares:');
console.log(pairs.join(', '));

console.log('-----------------------------------------------------------------------------');

const doubled = numbers.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue * 2);
    return accumulator;
}, []);

console.log('Números dobrados:');
console.log(doubled.join(', '));

console.log('Array original:');
console.log(numbers.join(', '));

console.log('-----------------------------------------------------------------------------');

const people = [
    { name: 'João', age: 18 },
    { name: 'Maria', age: 20 },
    { name: 'José', age: 21 },
    { name: 'Antônio', age: 19 },
    { name: 'Miguel', age: 17 }
];

const olderPerson = people.reduce((accumulator, currentValue) => {
    if (accumulator.age > currentValue.age) return accumulator;
    return currentValue;
});

console.log('Pessoa mais velha:');
console.log(olderPerson);

console.log('Array original:');
console.log(people);

console.log('-----------------------------------------------------------------------------');
