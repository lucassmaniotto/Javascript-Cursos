export default class Person {
    #name;
    #age;
    
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get age() {
        return this.#age;
    }

    get name() {
        return this.#name;
    }
    
    set age(age) {
        if(age < 0 || age > 120) return;
        this.#age = age;
    }
    
    getInfo() {
        return `Nome: ${this.#name} \nIdade: ${this.#age}`;
    }
}

