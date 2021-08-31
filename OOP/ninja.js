class Nina{
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
        if(this.health < 100){
            this.health += 10;
        }
        else{
            console.log("Health is at max")
        }
        return this;
    }

    ninjaDamaged(){
        this.health -= 10;
        return this;
    }
}

const samir = new Nina("Samir", 100);
console.log(samir);

samir.sayName();
samir.showStats().ninjaDamaged().showStats().drinkSake().showStats().drinkSake();
