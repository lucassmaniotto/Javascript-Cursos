const mage = {
    name: "Gandalf",
    class: "Mage",
    level: "20",
    allies: 
    [
        {
            name: "Saruman",
            class: "Mage"
        },
        {
            name: "Aragorn",
            class: "Warrior"
        },
        {
            name: "Legolas",
            class: "Archer"
        },
        {
            name: "Gimli",
            class: "Warrior"
        }
    ],
    status: "Missing"
}

delete mage.allies[0];
mage.allies[0] = {name: "Frodo", class: "Rogue"};

console.log(mage);

