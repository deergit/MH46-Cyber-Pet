// subclass for cat pet
import Pet from "./pet.js";

export default class Cat extends Pet {
    this.huntDesire = 0;
    constructor(name) {
        super(name);
    }
    update() {
        this.huntDesire -= 1;
        console.log(this);
    }
    hunt() {
        if (this.huntDesire > 70) {
            this.diceRoll = Math.floor(Math.random() * 3) + 1;
            if (this.diceRoll == 3) {
                // petMessage.textContent = `${this.name} caught a rat!)`;
                hygiene -= 30;
            }
            else {
                // petMessage.textContent = `${this.name} didn't catch anything...)`;
            }
        }
        return this;
    }

    play() {
        if (this.happiness < 80) {
            this.happiness += 20;
        }
        else {
            this.happiness = 100;
        }
        if (this.anger > 10) {
            this.anger -= 10;
        }
        else {
            this.anger = 0;
        }
        // can put line here to change text in the HTML saying that the pet was cleaned
        return this;
    }
}
