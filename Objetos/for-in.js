const character = {
    name: "Frodo",
    class: "Rogue",
    level: 5,
    skills: ["Stealth", "Sneak", "Dodge"],
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

// relatorio de informacoes do personagem
let atributes = "";

for(let info in character){
    if (typeof character[info] === "object" || typeof character[info] === "function"){
        continue;
    }
    else{
        atributes += `
        ${info}: ${character[info]}
        `;
    }
}

console.log(atributes);