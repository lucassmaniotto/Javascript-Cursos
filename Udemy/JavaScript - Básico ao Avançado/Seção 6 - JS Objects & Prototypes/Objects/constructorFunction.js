function Edgerunner (name, age, weapon, habilities, charClass) {
    this.name = name;
    this.age = age;
    this.weapon = weapon;
    this.habilities = habilities;
    this.class = charClass;
    
    this.attack = () => {
        console.log(`${this.name} is attacking with ${this.weapon}`);
    }

    this.characterSheet = () => {
        console.log(`${this.name} character sheet:`);
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Weapon: ${this.weapon}
        Habilities: ${this.habilities.join(', ')}
        Class: ${this.class}
        `);
    }
}

const edgerunner1 = new Edgerunner('Johnny Silverhand', 89, 'Malorian 3516 Power Pistol', ['Cyberware', 'Cool', 'Fast Talker'], 'Rockerboy');
const edgerunner2 = new Edgerunner('V', 35, 'Mantis Blades', ['Cyberware', 'Fast Talker', 'Hacking', 'Stealth'], 'Solo');

edgerunner1.characterSheet();
edgerunner2.characterSheet();

edgerunner1.attack();
edgerunner2.attack();
