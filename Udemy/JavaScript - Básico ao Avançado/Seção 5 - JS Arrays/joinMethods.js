const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const joinMethods = numbers
    // filtra os números pares
    .filter(number => number % 2 === 0)
    // dobra os números
    .map(number => number * 2)
    // soma todos os números
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(joinMethods);
