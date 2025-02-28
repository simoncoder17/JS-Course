const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
};

// Extract values and iterate
for (const value of Object.values(book)) {
    console.log(value); 
}
