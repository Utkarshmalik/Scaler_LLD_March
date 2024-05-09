
// A static method is a function that is associated with the class, not with instances of the class.

// This means you can call a static method without creating an instance of the class. Static methods are often used for utility functions that do not require an instance of the class to work.


class Pizza {

    static totalPizzasMade  = 0;   // Static property to keep count

    constructor(toppings, size, crustType){
        this.toppings=toppings;
        this.size=size;
        this.crustType =crustType;
        Pizza.totalPizzasMade++; // Increment the count each time a new pizza is made
    }

    describe(){
     console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} crust.`);
    }

    //Static method 
    static calculateTotalPizzasMade(){
        console.log(`Total pizzas made are : ${Pizza.totalPizzasMade}`)
    }
}



class StuffedCrustPizza extends Pizza {

    constructor(toppings,size,crustType,stuffingType ){
        //call the parents call from custructor from a child class : super 
        super(toppings, size, crustType);
        this.stuffingType = stuffingType;
    }

    describeStuffing(){
        console.log(`The pizza has ${this.stuffingType} stuffing in the crust.`)
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


Pizza.calculateTotalPizzasMade();



// Static Methods belong to the class rather than any particular object instance. They can be called directly on the class itself.
// Use Cases: Static methods are useful for utility functions, such as factory methods (methods that create instances of the class), or for operations that relate to the class as a whole rather than to individual instances.

// Accessing Static Properties: Within static methods, you can access static properties using the class name (e.g., Pizza.totalPizzasMade).


//UseCases 


//1 . Utiity Functions 


class MathUtils {
    static add(x, y) {
        return x + y;
    }
    
    static subtract(x, y) {
        return x - y;
    }
}

console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2


// 2. Validation or Verification:


class EmailValidator {
    static isValid(email) {
        // Regular expression for email validation
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }
}

console.log(EmailValidator.isValid("example@example.com")); // Output: true
console.log(EmailValidator.isValid("example@.com")); // Output: false