// Function using rest parameters to find the maximum number
function findMax(...numbers) {
    return Math.max(...numbers);
}

console.log(findMax(10, 20, 30, 40)); // Output: 40
console.log(findMax(5, 15, 25));      // Output: 25
