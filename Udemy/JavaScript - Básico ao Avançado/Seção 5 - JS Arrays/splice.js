// método splice() - remove e adiciona elementos em um array e retorna o array modificado

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// remove 1 elemento a partir do index 5
numbers.splice(5, 1);
console.log(numbers.join(', '));

// remove 3 elementos a partir do index 2
numbers.splice(2, 3);
console.log(numbers.join(', '));

// adiciona 1 elemento no index 2 e move o restante para frente 
numbers.splice(2, 0, 'a');
console.log(numbers.join(', '));

// adiciona 3 elementos no index 5 e move o restante para frente
numbers.splice(5, 0, 'b', 'c', 'd');
console.log(numbers.join(', '));

// troca o elemento no index 2 por 'e'
numbers.splice(2, 1, 'e');
console.log(numbers.join(', '));