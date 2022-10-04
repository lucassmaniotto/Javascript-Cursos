const rockerBoy = {
    name: 'Johnny Silverhand',
    age: 35,
    ocupation: 'SAMURAI lead singer',
    city: 'Night City',
    weapons: ['Revolver','Explosive Rounds', 'Cyberware'],
    songs: ['Chippin\' In', 'Never Fade Away', 'Archangel', 'A Like Supreme', 'The Ballad Of Buck Ravers', 'Black Dog'],
    showWeapons: function(){
        for (let i = 0; i < this.weapons.length; i++) {
            console.log(this.weapons[i]);
        }
    },
    showSongs: function(){
        for (let i = 0; i < this.songs.length; i++) {
            console.log(this.songs[i]);
        }
    }
};

//////////////////////////////

const Netrunner = function(name, age, ocupation, city, weapons, hacks){
    gName = name;
    gAge = age;
    gOcupation = ocupation;
    gCity = city;
    gWeapons = weapons;
    gHacks = hacks;

    this.getName = function(){
        return gName;
    }
    this.getAge = function(){
        return gAge;
    }
    this.getOcupation = function(){
        return gOcupation;
    }
    this.getCity = function(){
        return gCity;
    }
    this.getWeapons = function(){
        for (let i = 0; i < weapons.length; i++) {
            console.log(weapons[i]);
        }
    }
    this.getHacks = function(){
        for (let i = 0; i < hacks.length; i++) {
            console.log(hacks[i]);
        }
    }
}

//////////////////////////////

class Player {
    constructor(name, age, ocupation, city, weapons, skills){
        this.name = name;
        this.age = age;
        this.ocupation = ocupation;
        this.city = city;
        this.weapons = weapons;
        this.skills = skills;
    }

        getName = function(){
            return this.name;
        }
        getAge = function(){
            return this.age;
        }
        getOcupation = function(){
            return this.ocupation;
        }
        getCity = function(){
            return this.city;
        }
        getWeapons(){
           this.weapons.forEach(weapon => {
                console.log(weapon);
            });
        }
        getSkills(){
            this.skills.forEach(skill => {
                 console.log(skill);
             });
         }
    }
//////////////////////////////

const altCunningham = new Netrunner('Alt Cunningham', 25, 'Netrunner', 'Night City', ['Breach Protocol', 'Hacking', 'Cyberware'],['Soul Killer', 'Short Circuit', 'Data Spike', 'Data Bomb', 'Data Leech']);

const V = new Player('V', 23, 'Nomad', 'Night City', ['Cyberware', 'Tech', 'Assault'], ['Reflexes', 'Mantis Blades', 'Sandevistan']);

console.log(rockerBoy.showSongs());

console.log(altCunningham.getHacks());

console.log(V.getSkills());

