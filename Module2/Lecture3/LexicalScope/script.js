
var a=5;

function grandParent(){
    var b=6;
    function parent(){
        var c=7;
        function child(){
            var d=8;
            console.log(a+b+c+d);
        }
        child();
    }
    parent();
}

grandParent();

// Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function


// Every Nested function will have access to its parent's properties or variables and they will be able to work with them and the scope that is formed is lexical scope.
//  the functions may access all variables from their parent scopes up to the global scope, but no scope may access any variables from the functions defined inside it.




// Scope of variables refers to the accessibility of a particular variable within the program. 


// Global Scope : Any variable declared outside of a function is said to have Global Scope.


// Local Scope/Function scope  : Any variable that you declare inside a function is said to have Local Scope

// Block Scope :  You cannot access the variables declared inside a particular block (represented by {}) from outside the block. 





//Scope Chaining 



//  When a variable is referenced within a function, the JavaScript engine first looks for that variable within the function's own scope. If it doesn't find the variable there, it continues to search outward through the scopes of any enclosing functions (parent functions) until it either finds the variable or reaches the global scope.


// var globalVariable = 'I am global';

// function outerFunction() {
//     var outerVariable = 'I am outer';
    
//     function innerFunction() {
//         var innerVariable = 'I am inner';
//         console.log(globalVariable); // Access globalVariable from outerFunction's scope
//         console.log(outerVariable); // Access outerVariable from innerFunction's parent scope
//         console.log(innerVariable); // Access innerVariable from innerFunction's own scope
//     }
    
//     innerFunction();
// }

// outerFunction();


