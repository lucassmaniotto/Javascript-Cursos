export default class RemoteControl {
    #tv;
    #volume;
    #battery;

    constructor(tv) {
        this.#tv = tv;
        this.#volume = 0;
        this.#battery = Math.floor(Math.random() * 100);
    }

    get volume() {
        return this.#volume;
    }

    get tv() {
        return this.#tv;
    }

    get battery() {
        return this.#battery;
    }

    set tv(tv) {
        this.#tv = tv;
    }

    set battery(battery) {
        this.#battery = battery;
    }
    
    increaseVolume() {
        if(this.#volume >= 100 || this.#battery <= 0) return;
        this.#volume += 2;
        this.#battery -= 0.5;
    }

    decreaseVolume() {
        if(this.#volume <= 0 || this.#battery <= 0) return;
        this.#volume -= 2;
        this.#battery -= 0.5;
    }

    muteVolume() {
        if(this.#battery <= 0) return;
        this.#volume = 0;
        this.#battery -= 2;
    }

    getinfo() {
        return `TV: ${this.#tv} \nVolume: ${this.#volume}\nBattery: ${this.#battery}\n`;
    }

    static changeBattery() {
        console.log('Trocando...');
    }
}