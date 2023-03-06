import Person from './class.js';
import Employee from './heritage.js';
import RemoteControl from './static.js';

/* -------- Testes -------- */

console.log('-------- Teste de Person --------');
const person = new Person('Dwight Schrute', 30);
console.log(person.getInfo());

for(let i = 0; i <= 200; i++) {
    person.age = i;
}
// person.name = 'Michael Scott'; -> Não pode ser alterado pois é uma propriedade privada #name
console.log(person.getInfo());

console.log('-------- Teste de Employee --------');
const employee = new Employee('Michael Scott', 40, 10000);
console.log(employee.getInfo());
console.log(`Salário líquido: ${employee.getNetSalary(0.2)}`);

console.log('-------- Teste de RemoteControl --------');
const remoteControl = new RemoteControl('Samsung');
console.log(remoteControl.getinfo());
for(let i = 0; i <= 200; i++) {
    remoteControl.increaseVolume();
}
console.log(remoteControl.getinfo());
for(let i = 0; i <= 200; i++) {
    remoteControl.decreaseVolume();
}
console.log(remoteControl.getinfo());
for(let i = 0; i <= 25; i++) {
    remoteControl.increaseVolume();
}
console.log(remoteControl.getinfo());
remoteControl.muteVolume();
console.log(remoteControl.getinfo());

RemoteControl.changeBattery(); // método changeBattery() é estático e não pode ser chamado por uma instância de RemoteControl
