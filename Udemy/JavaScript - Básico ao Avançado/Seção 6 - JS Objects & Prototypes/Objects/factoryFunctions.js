function createPokemon(name, type, attack, defense) {
    return {
        name,
        type,
        attack,
        defense,
        calculateTotal() {
            return this.attack + this.defense;
        },
        get info(){
            return `${this.name} is a ${this.type} type pokemon with ${this.attack} attack points and ${this.defense} defense points, having a total of ${this.calculateTotal()} points.`;
        },
        set info([name, type, attack, defense]){
            this.name = name;
            this.type = type;
            this.attack = attack;
            this.defense = defense;
            console.log(`Pokemon was updated to ${this.name}!`);
        },
        speak() {
            const pokeName1 = this.name.substring(0, 4).toUpperCase() + " ";
            const pokeName2 = this.name.substring(0,2).toUpperCase();
            console.log(`${this.name} says: ${pokeName1.repeat(2)}${pokeName2}!`);
        },
        useAttack(attackName) {
            console.log(`${this.name} used ${attackName}!`);
        }
    }
}

const pokemon = createPokemon('Pikachu', 'Eletric', 55, 40);
console.log("Pikachu's total attributes are " + pokemon.calculateTotal() + "pts.");
pokemon.speak();
pokemon.useAttack('Thunderbolt');
console.log('\nPokeInfo:');
console.log(pokemon.info);

console.log('\nUpdating Pokemon...');
pokemon.info = ['Charizard', 'Fire', 84, 78]
console.log('\nPokeInfo:');
console.log(pokemon.info);
pokemon.speak();
pokemon.useAttack('Fire Blast');
