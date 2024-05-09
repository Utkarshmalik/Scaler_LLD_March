// StuffedCrustPizza
 //extends the basic Pizza
//  This new class has an additional property for the type of stuffing 
// and a method to describe the stuffing.


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


var specialOrder = new StuffedCrustPizza(['cheese', 'mushrooms'], 'large', 'thick', 'cheese and garlic');


specialOrder.describe();

// extends is used to define a class as a child of another class.
// super (within the constructor) calls the parent class' constructor with the parameters required by the parent class. It's necessary to call super() before using this in a constructor, as it will initialize the parent's properties in the child class.

// super is also used to call parent class methods. In the overridden describe method, super.describe() is used to include the parent's description logic.
