// Parent Class (Base Class)
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    // Method to be overridden by child classes
    move() {
        console.log("The vehicle is moving...");
    }
}

// Child Class: Car
class Car extends Vehicle {
    move() {
        console.log(`${this.brand} car is driving on the road.`);
    }
}

// Child Class: Boat
class Boat extends Vehicle {
    move() {
        console.log(`${this.brand} boat is sailing on the water.`);
    }
}

// Child Class: Airplane
class Airplane extends Vehicle {
    move() {
        console.log(`${this.brand} airplane is flying in the sky.`);
    }
}

// Using Polymorphism: Calling the same method on different objects
const vehicles = [
    new Car("Toyota"), 
    new Boat("Yamaha"), 
    new Airplane("Boeing")
];

// Loop through all vehicles and call move() without knowing their exact type
vehicles.forEach(vehicle => vehicle.move());
