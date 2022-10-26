export default class User{
    #name
    #email
    #birth
    #role
    #active
    constructor(name, email, birth, role, active = true){
        this.#name = name;
        this.#email = email;
        this.#birth = birth;
        this.#role = role || 'Student';
        this.#active = active;
    }

    get name(){
        return this.#name;
    }

    get email(){
        return this.#email;
    }

    get birth(){
        return this.#birth;
    }

    get role(){
        return this.#role;
    }

    get active(){
        if(this.#active)
            return 'Yes';
        return 'No';
    }

    set name(name){
        this.#name = name;
    }

    set email(email){
        this.#email = email;
    }

    set birth(birth){
        this.#birth = birth;
    }

    set role(role){
        this.#role = role;
    }

    set active(active){
        this.#active = active;
    }

    showInfo(){
        return `Name: ${this.name} \nEmail: ${this.email} \nDate of birth: ${this.birth} \nRole: ${this.role} \nActive: ${this.active}`;
    }
}