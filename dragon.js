// subclass for dragon pet
import "./pet.js";

class Dragon extends Pet {
    constructor() {
        this.greed = 0;
        this.anger = 0;
    }
    hunt() {
        greedRoll = Math.floor(Math.random() * 20) + 1;
        this.greed += greedRoll;
        if (this.anger > 10) {
            this.anger -= 10;
        }
        else {
            this.anger = 0
        }
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
            this.anger = 0
        }
        // can put line here to change text in the HTML saying that the pet was cleaned
        return this;
    }

}
