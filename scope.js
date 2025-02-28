// 🌍 Global Scope (Accessible anywhere)
var globalVar = "I am a global var!";
let globalLet = "I am a global let!";
const globalConst = "I am a global const!";

console.log(globalVar);   
console.log(globalLet);   
console.log(globalConst); 

function checkScope() {
    // Function Scope (`var` is function-scoped)
    var functionVar = "I exist only inside this function!";
    let functionLet = "I exist only inside this function with let!";
    const functionConst = "I exist only inside this function with const!";

    console.log(functionVar);   
    console.log(functionLet);   
    console.log(functionConst); 
}

checkScope();

// Block Scope (`let` & `const` are block-scoped)
if (true) {
    var blockVar = "I am accessible outside this block!";
    let blockLet = "I exist only inside this block!";
    const blockConst = "I exist only inside this block!";

    console.log(blockVar);   
    console.log(blockLet);   
    console.log(blockConst); 
}

console.log(blockVar); // Accessible because `var` is function-scoped
// console.log(blockLet); // ❌ Error: blockLet is not defined outside the block
// console.log(blockConst); // ❌ Error: blockConst is not defined outside the block
