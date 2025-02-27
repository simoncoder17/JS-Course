// ForLoopExample2.js

// Print even numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
    console.log("Even Number:", i);
}

// Example with an array
const animals = ["Dog", "Cat", "Elephant", "Lion"];
for (let i = 0; i < animals.length; i++) {
    console.log("Animal:", animals[i]);
}


// WhileLoopExample.js

// Print numbers from 1 to 5 using while loop
let num = 1;
while (num <= 5) {
    console.log("Number:", num);
    num++;
}

// Example with an array
const colors = ["Red", "Green", "Blue"];
let i = 0;
while (i < colors.length) {
    console.log("Color:", colors[i]);
    i++;
}

// DoWhileLoopExample.js

// Print numbers from 1 to 5 using do-while loop
let no = 1;
do {
    console.log("Number:", no);
    no++;
} while (no <= 5);

// Example with an array
const cities = ["New York", "Los Angeles", "Chicago"];
let i = 0;
do {
    console.log("City:", cities[i]);
    i++;
} while (i < cities.length);


// ForEachLoopExample.js

// Example with an array using forEach
const countries = ["USA", "Canada", "UK"];
countries.forEach(function(country) {
    console.log("Country:", country);
});

// Using arrow function
const numbers = [10, 20, 30, 40, 50];
numbers.forEach(num => console.log("Number:", num));
