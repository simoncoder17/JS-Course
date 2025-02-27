// ConditionalExample2.js 

const temperature = 30;

if (temperature < 0) {
  console.log("It's freezing!"); // Executes if temperature is below 0
} else if (temperature >= 0 && temperature <= 20) {
  console.log("It's cold."); // Executes if temperature is between 0 and 20
} else if (temperature > 20 && temperature <= 30) {
  console.log("The weather is pleasant."); // Executes if temperature is between 21 and 30
} else {
  console.log("It's hot!"); // Executes if temperature is above 30
}

// Example with string comparison
const userRole = "admin";

if (userRole === "admin") {
  console.log("You have full access.");
} else if (userRole === "editor") {
  console.log("You can edit content.");
} else {
  console.log("You have limited access.");
}
