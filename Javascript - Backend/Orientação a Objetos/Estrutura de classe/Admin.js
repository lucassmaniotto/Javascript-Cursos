import User from "./User.js"

export default class Admin extends User{
    constructor(name, email, birth, role = "Admin", active = true){
        super(name, email, birth, role, active);
    }

    showInfo(){
        return `Name: ${this.name} \nRole: ${this.role} \nActive: ${this.active}`;
    }

    createCourse(courseName, vacancies){
        return `Course ${courseName} created with ${vacancies} vacancies available!`
    }
}