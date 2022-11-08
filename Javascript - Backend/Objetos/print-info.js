const client = {
    name: 'David Menezes',
    age: 22,
    cpf: '123.456.789-00',
    email: 'david@edgerunner.com',
    city: 'Night City'
}

console.log(`
    Name: ${client.name}
    Age: ${client.age}
    CPF: ${client.cpf}
    Email: ${client.email}
    City: ${client.city}
`);

console.log('3 years later');

client.age += 3;

console.log(`
    Name: ${client.name}
    Age: ${client.age}
    CPF Substring: ${client.cpf.substring(0, 3)}
    Email: ${client.email}
    City: ${client.city}
`);