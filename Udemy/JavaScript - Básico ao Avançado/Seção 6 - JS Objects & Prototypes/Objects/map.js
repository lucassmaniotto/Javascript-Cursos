const people = [
    { id: 1, name: 'Johnny Silverhand', age: 56 },
    { id: 3, name: 'Jackie Wells', age: 45 },
    { id: 2, name: 'V', age: 30 },
];

function showInfo(person) {
    console.log(`ID: ${person.id}\nName: ${person.name}\nAge: ${person.age}\n`);
}

function showPeople(people) {
    for (const person of people.values()) {
        showInfo(person);
    }
}

const newPeople = new Map();
for (const person of people) {
    const { id } = person;
    newPeople.set(id, { ...person });
}

showPeople(newPeople);

console.log(newPeople);
console.log(newPeople.get(2));
console.log('');

console.log('Deleting person with ID 3:');
newPeople.delete(3);
showPeople(newPeople);
