// How would you create private properties for a class in JavaScript?

// Private properties ensure that class data is encapsulated and not directly accessible from outside the class. This is a fundamental principle of object-oriented programming, improving security and data integrity.

// In JavaScript ES6 and later versions, you can create private class properties by prefixing the property name with a # symbol. 

// Private properties are accessible only within the class that defines them, making them useful for encapsulating class-specific data and behaviors that shouldn't be directly accessible from outside the class.





class Pizza {

    static totalPizzasMade  = 0;   // Static property to keep count

    #toppings; // Private property
    #size; // Private property
    #crustType; // Private property


    constructor(toppings, size, crustType){
        this.#toppings=toppings;
        this.#size=size;
        this.#crustType =crustType;
        Pizza.totalPizzasMade++; // Increment the count each time a new pizza is made
    }

    describe(){
     console.log(`A ${this.#size} pizza with ${this.#toppings.join(", ")} on a ${this.#crustType} crust.`);
    }

    //Static method 
    static calculateTotalPizzasMade(){
        console.log(`Total pizzas made are : ${Pizza.totalPizzasMade}`)
    }
}



class StuffedCrustPizza extends Pizza {

    #stuffingType;  // Private property

    constructor(toppings,size,crustType,stuffingType ){
        //call the parents call from custructor from a child class : super 
        super(toppings, size, crustType);
        this.#stuffingType = stuffingType;
    }

    describeStuffing(){
        console.log(`The pizza has ${this.#stuffingType} stuffing in the crust.`)
    }

  // Overriding the describe method
    describe(){
        super.describe();
        this.describeStuffing();
    }

}


// Creating instances and calling methods
var customerOrder1 = new Pizza(['cheese', 'pepperoni'], 'medium', 'thin');
var customerOrder2 = new Pizza(['veggies', 'pepperoni'], 'small', 'thick');
var specialOrder = new StuffedCrustPizza(['cheese', 'mushrooms'], 'large', 'thick', 'cheese and garlic');


// console.log(customerOrder1.toppings);

// customerOrder1.describe();

console.log(specialOrder.stuffingType);  // Undefined, as toppings is private
console.log(specialOrder.#stuffingType); // Syntax error: Private field '#toppings' must be declared in an enclosing class


specialOrder.describeStuffing();


// Key Points About Private Properties:
// Encapsulation: Private properties ensure that class data is encapsulated and not directly accessible from outside the class. This is a fundamental principle of object-oriented programming, improving security and data integrity.
// Syntax: Prefix property names with # to make them private. These properties can only be read or modified from within the class itself.
// Access: Private properties cannot be accessed or modified directly from outside the class. Attempts to do so will result in a syntax error.
