// método map - mapeia os elementos de um array e retorna um novo array
// * Altera os elementos do array original
// * Não altera o tamanho do array original
// * Retorna um novo array com os elementos alterados

console.log('-----------------------------------------------------------------------------');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersDoubled = numbers.map(number => number * 2);

console.log('Números dobrados:');
console.log(numbersDoubled.join(', '));

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

const peopleNames = people.map(person => person.name);
const removedNames = people.map(person => {
    return { age: person.age }
});
const peopleWithId = people.map((person, index) => {
    return { id: index + 1, name: person.name, age: person.age }
    /*
        // Adiciona no final do objeto novo
        const newPerson = { ...person };
        newPerson.id = index + 1;
        return newPerson;
    */
});

console.log('Nomes das pessoas:');
console.log(peopleNames.join(', '));

console.log('Removendo a key "nome" do objeto:');
console.log(removedNames);

console.log('Adicionando a key "id" ao objeto:');
console.log(peopleWithId);

console.log('Array original:');
console.log(people);

console.log('-----------------------------------------------------------------------------');