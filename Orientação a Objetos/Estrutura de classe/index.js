import User from "./User.js";
import Admin from "./Admin.js";
import Teacher from "./Teacher.js";

console.log('=======================================================');
const newUser = new User('Maria', 'maria@student.com', '2021-10-10');
console.log(newUser.showInfo());
console.log('=======================================================');

const newTeacher = new Teacher('Luke', 'luke@teacher.com', '2021-13-12');
console.log(newTeacher.showInfo());
console.log('\n' + newTeacher.approveStudent('Maria','JS'));
console.log('=======================================================');


const newAdmin = new Admin('Ademiro', 'a@adm.com', '2021-01-01');
console.log('Admin current email: ' + newAdmin.email);
newAdmin.email = "ademiro@adm.com";
console.log('Changing Admin email: ' + newAdmin.email);

console.log('\n' + newAdmin.showInfo());
console.log('\n' + newAdmin.createCourse('NodeJS', 30));
console.log('=======================================================');