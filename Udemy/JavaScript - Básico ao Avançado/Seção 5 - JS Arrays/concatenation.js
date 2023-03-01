// método contcat() - concatena arrays e retorna um novo array
console.log('-----------------------------------------------------------------------------');
console.log('concat()');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ['João', 'Maria', 'José', 'Antônio', 'Miguel'];

const newArray = numbers.concat(names);
console.log(newArray.join(', '));

// usando o spread operator
console.log('-----------------------------------------------------------------------------');
console.log('spread operator');

const newArray2 = [...numbers, ...names];
console.log(newArray2.join(', '));

const newArray3 = [...numbers, 'a', ...names, 'b'];
console.log(newArray3.join(', '));

console.log('-----------------------------------------------------------------------------');