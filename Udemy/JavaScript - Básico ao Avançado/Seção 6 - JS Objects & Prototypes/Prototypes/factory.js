function createEmployee(name, surname, salary) {
    const fullName = () => `${name} ${surname}`;

    const increaseSalary = (value) => salary += value;

    const showInfo = () => `Name: ${fullName()}\nSalary: $${salary.toFixed(2)}`;

    const personPrototype = Object.assign({}, {fullName, increaseSalary, showInfo});
    
    return Object.create(personPrototype, {
        name: {value: name},
        surname: {value: surname},
        salary: {
            value: salary,
            writable: true,
            enumerable: true,
            configurable: true
        }
    });
}

const employee1 = createEmployee('Michael', 'Scott', 5000);
employee1.increaseSalary(1000);
console.log(employee1.showInfo());