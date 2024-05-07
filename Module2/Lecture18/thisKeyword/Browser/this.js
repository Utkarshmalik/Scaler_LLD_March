"use strict";


//GEC : this -> window object (in browsers)


// var a=5;

// console.log(a);
// console.log(this.a);
// console.log(window.a);



//In regular JS functions 

function fun(){
    console.log(this);
}

fun();


var person = {

    name:"Utkarsh",
    age:31,
    sayHi: function(){
        console.log("My name is ",this.name, " ");
        console.log("My age is ",this.age, " ");
    }
}



person.sayHi();





// question 

// var person = {

//     name:"Utkarsh",
//     age:31,
//     sayHi:function(){
        
//         console.log(this);

//         function child(){
//         console.log(this);
//         }

//         return child;
//     }
// }



// // person.sayHi()();

// let child = person.sayHi();
// child();



//question : (nested function call)



// var firstName="Animesh";


let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("80", this.firstName);
        const iAmInner = function(){
            console.log("82",this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();





//non-strict mode 


/*
When this is used in the global context (outside of any function), it refers to the global object (window in browsers, global in Node.js).

When this is used within a function that is called as a method of an object, this refers to the object that the function is a property of.


*/



// console.log(this);