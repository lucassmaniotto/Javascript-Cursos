function User(name, email){
    this.name = name;
    this.email = email;
    this.showInfo = () => `${this.name}\n${this.email}`
    /* this.showInfo = function() {
        return `\n${this.name} \n${this.email}`
    } */
}

function Admin(role){
    User.call(this, 'Michael Scott', 'michaelscott@dundermifflin.com');
    this.role = role || 'Employee';
}

Admin.prototype = Object.create(User.prototype);
const newUser = new Admin('Regional Manager');
console.log(newUser.showInfo());
console.log(newUser.role);