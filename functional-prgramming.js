// Sample data
const prices = [10, 20, 30, 40, 50];

// Pure function: Applies a discount
const applyDiscount = (price) => price * 0.9;

// Pure function: Filters prices above 25
const isAbove25 = (price) => price > 25;

// Pure function: Calculates total price
const totalPrice = (a, b) => a + b;

// Functional programming approach: Map, Filter, Reduce
const discountedPrices = prices.map(applyDiscount);
const filteredPrices = discountedPrices.filter(isAbove25);
const finalTotal = filteredPrices.reduce(totalPrice, 0);

console.log(discountedPrices);
console.log(filteredPrices);
console.log(finalTotal);
