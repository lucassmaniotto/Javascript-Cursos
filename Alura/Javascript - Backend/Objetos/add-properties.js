const person = {
    name: 'Lucy',
    age: 22,
    profession: 'Netrunner',
    location: 'Night City',
};

console.log(person);

person.skills = ['Hacking', 'Combat'];

console.log(person);

person.skills.push('Stealth');

console.log(`
  Name: ${person.name}	
  Age: ${person.age}
  Profession: ${person.profession}
  Location: ${person.location}
  Skills: ${person.skills.join(', ')}
`);