function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    //this.fullName =  () => `${this.name} ${this.lastName}`;

    Person.prototype.fullName = () =>  `Prototype - ${this.name} ${this.lastName}`;
}

const person = new Person('Lucas', 'Smaniotto');
console.log(person.fullName());
