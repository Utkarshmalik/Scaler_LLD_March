// 1. What are Constructor Functions and Why Use Them?


// const person = {

//     name:"Utkarsh",
//     age:31

// }





// let person1 = {

//     name:"Utkarsh",
//     age:31

// }

// let person2 = {
//     name:"Rahul",
//     age:33
// }


/*

Constructor functions in JavaScript are a fundamental concept used for creating objects with a specific structure and behavior. 

They serve as templates for creating multiple similar objects with shared properties and methods.


Purpose 

Constructor functions are primarily used to create multiple instances (objects) that share the same structure and behavior.

They encapsulate the object's blueprint, allowing you to easily create new instances with consistent properties and methods.
*/



/*
Imagine you're opening a restaurant that serves a variety of pizzas.

Each pizza has different toppings, sizes, and crust types.

Instead of making each pizza from scratch every time an order comes in, you devise a recipe (a blueprint) that outlines the steps and ingredients necessary for making any pizza.

This blueprint is like a constructor function in JavaScript.

*/

/*
The Blueprint (Constructor Function)

The recipe for making a pizza acts as your "Pizza" constructor function. It specifies:

Toppings: cheese, pepperoni, vegetables, etc.
Size: small, medium, large.
Crust Type: thin, thick, stuffed.
*/




// Technically speaking, a constructor function is a regular function with the following convention:

// The name of a constructor function starts with a capital letter like Person, Document, etc.
// A constructor function should be called only with the new operator.


// Basically, the new operator does the following:

// 1. Create a new empty object and assign it to the this variable.
// 2.  Assign the arguments and properties to the object 
// 3.Return the this value.

function Pizza(toppings, size, crustType){

    this.toppings = toppings;
    this.size = size;
    this.crustType = crustType;
    this.describe = function(){
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);

    }
}

const pizza1 = new Pizza(["cheese","vegetables"],"small","thin");
const pizza2 = new Pizza(["cheese"],"medium","thin");
const pizza3 = new Pizza(["vegetables"],"large","thick");

// pizza1.describe();
// pizza2.describe();
// pizza3.describe();



console.log(pizza1);
console.log(pizza2);
console.log(pizza3);


//the value of this keyowrd inside constructor functions point the new object that is being created 

function Person(firstName, lastName){
    this.firstName= firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        return "My full name is ",this.firstName + " " + this.lastName;
    }

}

const person1 =  new Person("Utkarsh","malik");
const person2 = new Person("Rahul","Jain");

console.log(person1.getFullName());
console.log(person2.getFullName());



// Constructor Functions were the traditional way to create objects and implement inheritance in ES5 and earlier versions. They work well but can be less intuitive and harder to understand for complex inheritance structures.
