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

function characterHasAllies(obj){
    const propsCharacter = Object.keys(obj);
    if(propsCharacter.includes('allies')){
        console.log(`Character: ${obj.name}`);
        if (!obj.allies){
            console.log("No allies found");
        }
        else{
        console.log(`Allies: ${obj.allies.length}`);
        }
    }
}

characterHasAllies(character);