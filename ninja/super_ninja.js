class Ninja {
    constructor(name, health=10, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(name) {
        console.log(`I am ${this.name}`);
        return this;
    }

    showStats(name, strength, speed, health) {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(wisdom) {
        super(name, health=200, speed=10, strength=10)
        this.wisdom = 100;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two progammers can do in two months.");
    }
}