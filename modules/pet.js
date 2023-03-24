export default class Pet {
    
    asleep = false;
    health = 100;
    hunger = 0;
    happiness = 50;
    bond = 0;
    energy = 100;
    hygiene = 100;

    hungerMod = 1;
    happinessMod = 1;
    bondMod = 1;
    energyMod = 1;
    hygieneMod = 1;
    
    recentlyAte = false;
    poop = false;

    constructor(name) {
        this.name = name;
    }

    update() {
        if (this.hunger > 80 || this.hygiene < 20 || this.happiness < 20) {
            this.health -= 10;
        }
        if (this.asleep = true) {
            this.hunger += (0.5 * this.hungerMod);
        }
        else {
            this.energy -= (1 * this.energyMod);
            this.hunger += (1 * this.hungerMod);
        }
        if (this.poop = true) {
            this.hygene -= (3 * this.hygieneMod);
        }
        else {
            this.hygene -= (1 * this.hygieneMod);
        }
        this.happinessCalc = 1 / this.hunger;
        this.happinessCalc = this.happinessCalc * 100;
        this.happiness -= (this.happinessCalc * this.happinessMod);
        console.log(this);
    }

    eat() {
        if (this.hunger > 40) {
            this.hunger -= 40;
        }
        else {
            this.hunger = 0;
        }
        // can put line here to change text in the HTML saying that the pet ate
        // for example --->  petMessage.textContent = `${this.name} ate!)`;
        this.recentlyAte = true;
    }

    play() {
        if (this.happiness < 80) {
            this.happiness += 20;
        }
        else {
            this.happiness = 100;
        }
        // can put line here to change text in the HTML saying that the pet played
    }

    sleep() {
        this.asleep = true;
        document.getElementById("pet-image").src=sleepImg;
        setTimeout(() => {
            this.energy = 100;
            this.asleep = false;
            document.getElementById("pet-image").src=wakeImg;
        }, (Math.floor((Math.random() * 30000) + 60000)));
    }

    defecate() {
        // random time after eating pet will defecate, will increase dirtiness levels
        // put an if statement in the tick handler that checks each tick if recentlyAte = true and calls this method if that's the case
        setTimeout(() => {
            this.poop = true;
        }, (Math.floor((Math.random() * 20000) + 20000)));

    }

    clean() {
        this.hygiene = 100;
        this.poop = false;
    }

    kill() {
        if (health === 0) {
            // call HTML element that tells player the game is over
        }
        
    }
}
