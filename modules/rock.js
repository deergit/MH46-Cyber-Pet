// subclass for rock pet
import Pet from "./pet.js";

export default class Rock extends Pet {
    moss = {max: 100, value: 0};

    constructor(name, petType) {
        super(name, petType);
    }

    petUpdate() {
        (this.moss.value < 100) ? this.moss.value += 1 : this.health.value -= 10;
    }
    polish() {
        document.getElementById('pet-speech').textContent = `${this.name} was polished!`;
        this.moss.value = 0;
    }
}
