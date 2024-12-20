class Animal {
    #name;
    constructor(name) {
        if (this.constructor === Animal)
            throw new Error("Cannot instantiate abstract class Animal");
        this.#name = name.toLowerCase();
    }
    get name() {
        return this.#name[0].toUpperCase() + this.#name.slice(1);
    }
    set name(name) {
        this.#name = name.toLowerCase();
    }
    eat() {
        console.log("Eating...");
        
    }
    reproduce() {
        return new this.constructor("Unnamed");
    }
}

class Cow extends Animal {
    constructor(name) {
        super(name);
    }
    sound(){
        console.log("Moo");
    }
}

let cow1 = new Cow("Cow1");


cow1.eat();
console.log(cow1.reproduce());
cow1.sound();