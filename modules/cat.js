// subclass for cat pet
import Pet from "./pet.js";

export default class Cat extends Pet {
    huntDesire = {max: 100, value: 0};

    hungerMod = 1.5;
    happinessMod = 2;
    bondMod = 1;
    energyMod = 3;
    hygieneMod = 0.75;

    defaultImg = "../images/cat.png";
    sleepImg = "../images/cat-sleeping.png";

    constructor(name, petType) {
        super(name, petType);
        document.getElementById('pet-status-name').textContent = this.name;
        document.getElementById('pet-image').src = this.defaultImg;
    }

    petUpdate() {
        this.huntDesire.value = Math.max(this.huntDesire.value += (Math.random() * 3), 100);
    }

    hunt() {
        if (this.huntDesire.value > 70) {
            this.diceRoll = Math.floor(Math.random() * 3) + 1;
            if (this.diceRoll == 3) {
                // petMessage.textContent = `${this.name} caught a rat!)`;
                this.hygiene.value -= 30;
            }
            else {
                // petMessage.textContent = `${this.name} didn't catch anything...)`;
            }
        }
    }
}
