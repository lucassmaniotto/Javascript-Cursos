const character = {
    name: "Frodo",
    class: "Rogue",
    level: 5,
    levelUp:function(exp){
        this.level += exp
    },
    allies: 
    [
        {
            name: "Gandalf",
            class: "Mage",
            level: "20"
        },
        {
            name: "Aragorn",
            class: "Warrior",
            level: "15"
        },
        {
            name: "Legolas",
            class: "Archer",
            level: "17"
        },
        {
            name: "Gimli",
            class: "Warrior",
            level: "17"
        }
    ],
    status: "Alive"
};

console.log(character.level);
character.levelUp(5);
console.log(character.level);