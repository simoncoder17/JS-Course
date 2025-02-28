// Recursive function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Function to generate a sequence of factorials
function generateFactorialSequence(count) {
    let sequence = [];
    for (let i = 0; i < count; i++) {
        sequence.push(factorial(i));
    }
    return sequence;
}

console.log(generateFactorialSequence(6)); 
// Output: [1, 1, 2, 6, 24, 120]
