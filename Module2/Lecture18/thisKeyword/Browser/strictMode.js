
//1.Error Prevention:


// Non-strict mode


function foo(){
    x=10; // This creates a global variable 'x' if it doesn't exist
}

foo();

console.log(x);



// Strict mode

"use strict";

function bar() {
    y=20;

}

console.log(y);
