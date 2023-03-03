const edgerunner = new Object();
edgerunner.name = 'Johnny';
edgerunner.surname = 'Silverhand';
edgerunner.weapon = 'Malorian 3516 Power Pistol';
edgerunner.sayLine = function() {
    return 'Wake up, Samurai. We have a city to burn.';
};
edgerunner.attack = function() {
    return `${this.name} ${this.surname} attacks with ${this.weapon}.`;
};


console.log(`${edgerunner.name} ${edgerunner.surname}: ${edgerunner.sayLine()}`);
console.log(edgerunner.attack());