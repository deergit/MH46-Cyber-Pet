// subclass for dragon pet
import Pet from "./pet.js";

export default class Dragon extends Pet {
    greed = {max: 100, value: 0};
    anger = {max: 100, value: 0};

    constructor(name, petType) {
        super(name, petType);
    }

    petUpdate() {
        (this.greed.value < 100) ? this.greed.value += 5 : this.health.value -= 10;
        (this.anger.value < 100) ? this.anger.value += 5 : this.health.value -= 10;
    }

    hunt() {
        greedRoll = Math.floor(Math.random() * 20) + 1;
        this.greed += greedRoll;
        if (this.anger.value > 10) {
            this.anger.value -= 10;
        }
        else {
            this.anger.value = 0;
        }
    }

    pay() {
        if (this.happiness.value < 80) {
            this.happiness.value += 20;
        }
        else {
            this.happiness.value = 100;
        }
        if (this.greed.value > 10) {
            this.greed.value -= 10;
        }
        else {
            this.greed.value = 0;
        }
    }
}
