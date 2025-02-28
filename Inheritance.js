// Parent Class (Base Class)
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting...`);
    }
}

// Child Class (Derived Class)
class Car extends Vehicle {
    honk() {
        console.log(`${this.brand} says Beep Beep!`);
    }
}

// Creating an object from the Child Class
const myCar = new Car("Toyota");

myCar.start();  
myCar.honk();
