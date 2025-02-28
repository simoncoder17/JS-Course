// Function to create a product object
function createProduct(name, price) {
    return {
        name: name,
        price: price,
        isExpensive: price > 50
    };
}

const product = createProduct("Laptop", 1200);
console.log(product); 
// Output: { name: 'Laptop', price: 1200, isExpensive: true }
