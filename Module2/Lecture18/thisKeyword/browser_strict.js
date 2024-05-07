"use strict";
// console.log(this);


// function myFunction() {
//   console.log(this);
// }

// myFunction();


// Scenario 3
// var obj = {
//   fn: function () {
//     console.log("Scenario 3:");
//     console.log(this); // Output: obj
//   },
// };

// obj.fn();


// Scenario 4: this -> obj -> fn -> fn = global object
console.log("Scenario 4:");
var obj2 = {
  fn: function () {
    console.log(this);
    var nestedFn = function () {
      console.log(this); 
    };
    nestedFn();
  }
};
obj2.fn();