class Vehicle {
    #name;
    #speed;
    constructor(name, speed) {
        if (this.constructor === Vehicle)
            throw new Error("Cannot instantiate abstract class Vehicle");
        this.#name = name.toLowerCase();
        this.#speed = speed;
    }
    get name() {
        return this.#name[0].toUpperCase() + this.#name.slice(1);
    }
    move(distance) {
        let time = distance / this.#speed;
        console.log(`Moved ${distance}km for ${time}h`);
        return time;
    }
}

class GroundVehicle extends Vehicle {
    constructor(name, speed) {
        super(name, speed);
    }
    honk() {
        console.log("Honk");
    }
}

class Tank extends GroundVehicle {
    #damage
    constructor(name, speed, damage) {
        super(name, speed);
        this.#damage = damage;
    }
    shoot(num) {
        let totalDamage = num * this.#damage;
        console.log(`Shooted ${num} times and dealed ${totalDamage} damage`);
        return totalDamage;
    }
}

let Su_152 = new Tank(`Su-152`, 40, 100);

Su_152.move(10)
Su_152.honk();
Su_152.shoot(10);