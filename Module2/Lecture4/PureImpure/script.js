// Impure Functions in JavaScript

// An impure function is a function that contains one or more side effects. It mutates data outside of its scope and does not predictably produce the same output for the same input.



// Pure functions are functions that produce the same output for the same input and do not have any observable side effects.

// They rely only on their input arguments and do not modify external state or variables outside their scope.

// Pure functions are deterministic; given the same input, they will always return the same output.

// They do not cause mutations or changes to data outside of their scope, making them predictable and easier to reason about.
// Pure functions are ideal for situations where predictability and testability are important.


// function add(a, b) {
//   return a + b;
// }


// add(10,1000);






// Impure functions, in contrast, can have side effects or rely on external state, making their behavior less predictable.

// They may modify variables outside their scope, perform I/O operations, mutate data structures, or have other observable effects beyond returning a value.

// Impure functions may introduce complexity and make code harder to understand and test.




// Functions Modifying Global Variables:

let counter = 0;

function incrementCounter() {
  counter++; // Modifies global variable
}


// Functions with Side Effects:

function logMessage(message) {
  console.log(message); // Side effect: logs to console
}


// Functions Depending on External State:


let base = 10;

function multiplyByBase(value) {
  return value * base; // Relies on external state
}



// Functions with I/O Operations:


function fetchDataFromAPI() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data)); // Side effect: fetches data from API
}


// Functions Modifying Mutable Data Structures:

let array = [1, 2, 3];

function pushToArray(value) {
  array.push(value); // Modifies mutable array
}
