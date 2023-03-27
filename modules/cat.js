// subclass for cat pet
import Pet from "./pet.js";

export default class Cat extends Pet {
    huntDesire = 0;

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
    }

    petUpdate() {
        console.log("catting");
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
    }
}
