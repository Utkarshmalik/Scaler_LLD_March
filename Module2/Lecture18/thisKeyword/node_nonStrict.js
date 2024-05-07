// this keyword in Node.js in non-strict mode


// Scenario 1: Console.log(this)

// console.log("Scenario 1:");
// console.log(this);


// Scenario 2: Console.log(this) 


// console.log("Scenario 2:");


// function fnGlobal() { 
//     console.log(this);
// }

// fnGlobal();

// Scenario 3: this -> obj -> fn = object itself

// console.log("Scenario 3:");
// var obj = {
//   fn: function () {
//     console.log(this); 
//   }
// };
// obj.fn();



// Scenario 4: this -> obj -> fn -> fn = global object
// console.log("Scenario 4:");
// var obj2 = {
//   fn: function () {
//     console.log(this);
//     var nestedFn = function () {
//       console.log(this); 
//     };
//     nestedFn();
//   }
// };
// obj2.fn();