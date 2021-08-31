class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Name: ${this.name}`);
        return this;
    }

    showStats(){
        console.log(`Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`);
        return this
    }

    drinkSake(){
            this.health += 10;
        return this;
    }

    ninjaDamaged(){
        this.health -= 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom){
        super(name, health, speed, strength);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.health += 5;
        this.strength += 25;
        this.wisdom += 15;
        return this;
    }
}

//ninja
const samir = new Ninja("Samir", 100);
console.log(samir);

samir.sayName();
samir.showStats().ninjaDamaged().showStats().drinkSake().showStats().drinkSake();

//super ninja
const leon = new Sensei("Leon", 250);
console.log(leon);

leon.sayName();
leon.showStats().ninjaDamaged().showStats().speakWisdom().showStats();