/* 
const array = [1, 2, 3];

const prototypeArray = array.__proto__ // -> guarda as definições de todo array que é criado com JS

const object = {a: 1, b: 2, c: 3};

const prototypeObject = object.__proto__ // -> guarda as definições de todo objeto que é criado com JS

function sum(a, b){
    return a + b;
}

const prototypeFunction = sum.__proto__ // -> guarda as definições de toda função que é criada com JS 
*/

function Employee(name, id, email, salary){
    this.name = name;
    this.id = id;
    this.email = email;
    this.salary = salary;
    this.raiseSalary = function(raisePercentage){
        this.salary += (raisePercentage / 100) * this.salary;
    }
}

function Position(name, id, email, salary, position){
    Employee.call(this, name, id, email, salary);
    this.position = position;
}

Position.prototype.changePosition = function(newPosition){
    this.position = newPosition;
}

const michaelScott = new Position("Michael Scott", "123653", "michael.scott@dundermifflin.com", 3500, "Manager");

michaelScott.changePosition("Regional Manager");

michaelScott.raiseSalary(10);

console.log(`
Name: ${michaelScott.name}
ID: ${michaelScott.id}
Email: ${michaelScott.email}
Salary: $${michaelScott.salary}
Position: ${michaelScott.position}
`);