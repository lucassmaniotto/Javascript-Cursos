const characteres = 
[
    {
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
    },
    {
        name: "Legolas",
        class: "Archer",
        level: 17,
        skills: ["Shooting", "Dodge", "Stealth"],
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
                name: "Frodo",
                class: "Rogue",
                level: "5"
            },
            {
                name: "Gimli",
                class: "Warrior",
                level: "17"
            }
        ],
        status: "Alive"
    }
]

const alliesList = [...characteres[0].allies, ...characteres[1].allies];

console.table(alliesList);