// Creating an object representing a book
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction"
};

// Printing the original object
console.log("Original Book:", book);

// Modifying an existing property
book.year = 1993;  
book.genre = "Philosophical Fiction";  

// Adding a new property
book.publisher = "HarperCollins";

// Deleting a property
delete book.author;

// Printing the modified object
console.log("Modified Book:", book);
