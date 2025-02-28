// Abstract Class (Base Class)
class Vehicle {
    constructor(type) {
        if (new.target === Vehicle) {
            throw new Error("Cannot instantiate abstract class Vehicle");
        }
        this.type = type;
    }

    move() {
        throw new Error("move() must be implemented by subclasses");
    }
}

// Car Class (Concrete Class)
class Car extends Vehicle {
    move() {
        console.log(`${this.type} moves on four wheels.`);
    }
}

// Bike Class (Concrete Class)
class Bike extends Vehicle {
    move() {
        console.log(`${this.type} moves on two wheels.`);
    }
}

// Using the classes
const car = new Car("Car");
car.move(); 

const bike = new Bike("Bike");
bike.move();
