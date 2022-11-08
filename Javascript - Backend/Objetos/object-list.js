const mage = {
    name: "Gandalf",
    class: "Mage",
    level: "20",
    allies: 
    [
        {
            name: "Frodo",
            class: "Rogue",
            level: "5"
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
    status: "Missing"
}

// substitui a posição 0 do array allies por um objeto novo
mage.allies[0] = {name: "Bilbo", class: "Rogue", level: "10"};

// adiciona no final do array
mage.allies.push({name: "Frodo", class: "Rogue", level: "5"});

console.log(mage);

const lowerLevel = mage.allies.filter((allies) => allies.level < 10);

console.log('\nLower level than 10: ', lowerLevel);

console.log('\nCharacters with lower level for the campaing:');
console.log(`Name: ${lowerLevel[0].name}\nLevel: ${lowerLevel[0].level}`);