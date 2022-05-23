class Animal {
    constructor(animalName, animalFood) {
        this.speed = 0;
        this.food = animalFood;
        this.name = animalName;
    }
}

class rabbit extends Animal {
    constructor(name, food) {
        super(name, food)
    }

    hide() {
        alert(this.name +" like to eat " + this.food + "." + " " + "But, one is hiding from us.");
    }
}
let bunny = new rabbit("Rabbits", "carrots");
//rabbit.go();
bunny.hide();

class cow extends Animal {
    constructor(name, food) {
        super(name, food)
    }
    moo() {
        alert(this.name + " like to moo at night.");
    }
}
let milk = new cow("Cows", "grass")
milk.moo();

class alligator extends Animal {
    constructor(name, food) {
        super(name, food)
    }
    eat() {
        alert(this.name + " like to eat " + this.food);
    }
}
let scaryeater = new alligator("Alligators", "ducks" + ".");
scaryeater.eat();


class sloth extends Animal {
    constructor(name, food) {
        super(name, food)
    }
    sleep() {
        alert(this.name + " love to sleep at night.");
    }
}
let slowanimal = new sloth("Sloths", "leaf branches");
slowanimal.sleep();