const employee = {
    name: 'Michael Scott',
    age: 45,
    title: 'Regional Manager',
    department: 'Management',
    salary: 100000,
    phones: ['555-123-4567', '555-123-4568'],
};

employee.address = {
    street: '1725 Slough Avenue',
    city: 'Scranton',
    state: 'PA',
    zip: '18504'
};

console.log(employee);

employee.address.zip = 18504;

console.log(employee);