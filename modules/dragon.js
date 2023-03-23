// subclass for dragon pet
import Pet from "./pet.js";

export default class Dragon extends Pet {
    constructor(name) {
        super(name);
        this.greed = 0;
        this.anger = 0;
    }
    
    update() {
        greedRoll = Math.floor(Math.random() * 2);
        this.greed += greedRoll;
        angerRoll = Math.floor(Math.random() * 3);
        this.anger += angerRoll;
    }

    hunt() {
        greedRoll = Math.floor(Math.random() * 20) + 1;
        this.greed += greedRoll;
        if (this.anger > 10) {
            this.anger -= 10;
        }
        else {
            this.anger = 0;
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
            this.anger = 0;
        }
        // can put line here to change text in the HTML saying that the pet was cleaned
        return this;
    }
}
