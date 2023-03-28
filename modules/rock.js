// subclass for rock pet
import Pet from "./pet.js";

export default class Rock extends Pet {
    moss = {max: 100, value: 0};

    hungerMod = 1;
    happinessMod = 1;
    bondMod = 1;
    energyMod = 1;
    hygieneMod = 1;

    defaultImg = "../images/rock.png";
    sleepImg = "../images/rock-sleeping.png";

    constructor(name, petType) {
        super(name, petType);
        document.getElementById('pet-image').src = this.defaultImg;
    }

    petUpdate() {
        this.moss += 1;
        console.log("petupdate");
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
    }

    polish() {
        this.moss = 0;
    }
}
