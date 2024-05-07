// Scenario 1: console.log(this)




// console.log(this); // Window Object



// Scenario 2: console.log(this) inside a function

// function exampleFunction() {
//   console.log(this);
// }

// exampleFunction(); // Window Object


// Scenario 3: this inside an object method

// var obj = {
//   prop: 'I am a property',
//   method: function() {
//     console.log(this.prop);
//   }
// };

// obj.method(); // "I am a property"


// Scenario 4: this inside nested functions



// var obj = {
//   prop: 'I am a property',
//   method: function() {
//     var nestedFunction = function() {
//       console.log(this.prop);
//     };
//     nestedFunction();
//   }
// };

// obj.method()