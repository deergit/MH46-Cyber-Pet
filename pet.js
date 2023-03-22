class pet {
    constructor(name) {
        this.name = name;
        this.hunger = 100;
        this.happiness = 100;
    }
    eats() {
        if (this.hunger < 60) {
            this.hunger += 40;
        }
        else {
            this.hunger = 100;
        }
        // can put line here to change text in the HTML saying that the pet ate
        // for example --->  petMessage.textContent = `${this.name} ate!)`;
        return this;
    }
    play() {
        if (this.happiness < 80) {
            this.happiness += 20
        }
        else {
            this.happiness = 100
        }
        // can put line here to change text in the HTML saying that the pet played
        return this;
    }
}
