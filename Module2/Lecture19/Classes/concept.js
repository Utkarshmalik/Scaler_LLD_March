//Classes in JS are syntax sugars


class MyClass {
  constructor() {
    // Initialization of properties
  }

  myMethod() {
    // Method implementation
  }
}

/*
class keyword is used to declare a class.
MyClass is the name of the class.
The constructor is a special method for creating and initializing objects created with the class. There can only be one constructor method in a class.
myMethod() is an example of a class method that can be added to the class.
*/


class Pizza {

    constructor(toppings, size, crustType){
        this.toppings=toppings;
        this.size=size;
        this.crustType =crustType;
    }

    describe(){
     console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
    }
}



const pizza1 = new Pizza(["cheese","vegetables"],"small","thin");
const pizza2 = new Pizza(["cheese"],"medium","thin");
const pizza3 = new Pizza(["vegetables"],"large","thick");


console.log(pizza1.toppings);
pizza1.describe();
// console.log(pizza2);
// console.log(pizza3);



// Classes in ES6 offer a more straightforward syntax for creating objects and handling inheritance. They essentially provide syntactic sugar over JavaScript's existing prototype-based inheritance and do not introduce a new object-oriented inheritance model.





