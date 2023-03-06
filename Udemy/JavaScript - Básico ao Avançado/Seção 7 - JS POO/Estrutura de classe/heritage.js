import Person from "./class.js";

export default class Employee extends Person {
    #salary;

    constructor(name, age, salary) {
        super(name, age);
        this.#salary = salary;
    }

    get salary() {
        return this.#salary;
    }

    set salary(salary) {
        this.#salary = salary;
    }

    getInfo() {
        return `${super.getInfo()} \nSalário: ${this.#salary}`;
    }

    getNetSalary(tax) {
        return this.#salary - (this.#salary * tax);
    }
}