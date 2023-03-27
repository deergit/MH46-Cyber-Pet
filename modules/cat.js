// subclass for cat pet
import Pet from "./pet.js";

export default class Cat extends Pet {
    huntDesire = {max: 100, value: 0};

    constructor(name, petType) {
        super(name, petType);
    }

    petUpdate() {
        (this.huntDesire.value < 100) ? this.hunger.value += 5 : this.health.value -= 10;
    }

    hunt() {
        this.diceRoll = Math.floor(Math.random() * 3) + 1;
        if (this.diceRoll == 3) {
            document.getElementById('pet-speech').textContent = `${this.name} caught a rat!`;
            this.hygiene.value -= 30;
        }
        else {
            document.getElementById('pet-speech').textContent = `${this.name} didn't catch anything...`;
        }
    }
}
