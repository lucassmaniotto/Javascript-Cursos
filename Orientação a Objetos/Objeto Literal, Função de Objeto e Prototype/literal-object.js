const User = {
    name: "Michael Scott",
    email: "michaelscott@dundermifflin.com",
    dateOfBirth: "03/15/1965",
    role: "Regional Manager",
    active: true,
    showInfo(){
        console.log(`\n${this.name} \n${this.email} \n${this.dateOfBirth} \n${this.role}`);
    },
}

const otherUser = {
    name: "Dwight Schrute",
    email: "dwightschrute@dundermifflin.com",
    dateOfBirth: "01/20/1970",
    role: "Assistant to the Regional Manager",
    active: true,
    makeASale(){
        console.log("Sale made!");
    }
}

/* 
Não é recomendável alterar diretamente o prototype, 
pois alterar diretamente as regras de herança de 
qualquer objeto afeta a performance do código em 
qualquer interpretador, seja o NodeJS ou navegadores.
*/
Object.setPrototypeOf(otherUser, User)

otherUser.makeASale();
otherUser.showInfo();