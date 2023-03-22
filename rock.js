// subclass for rock pet
import "./pet.js";

class Rock extends Pet {
    constructor() {
        this.moss = 0;
    }
    play() {
        if (this.happiness < 80) {
            this.happiness += 20;
        }
        else {
            this.happiness = 100;
        }
        this.moss += 10;
        // can put line here to change text in the HTML saying that the pet was cleaned
        return this;
    }
    polish() {
        this.moss = 0;
    }
}
