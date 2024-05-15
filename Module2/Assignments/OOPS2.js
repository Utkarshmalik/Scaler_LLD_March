// Question 1: Class Inheritance
// Problem Statement:

// You are working on a project that involves different types of vehicles. Implement a Vehicle class with properties make and model. Extend this class to create a Car class that has an additional property numDoors. Ensure that the Car class inherits the properties from the Vehicle class.



// class Vehicle{

//     constructor(make,model){
//         this.make=make;
//         this.model =model;
//     }

// }

// class Car extends Vehicle {

//     constructor(make,model,numDoors){
//         super(make,model);
//         this.numDoors=numDoors;
//     }
// }

// const myCar = new Car("Creta","2016",4);




// Question 2: Polymorphism in JavaScript
// Problem Statement:

// Create a base class Vehicle with a method start that prints a message indicating the vehicle has started. Implement two subclasses, Car and Motorcycle, that extend the Vehicle class. Override the start method in each subclass to provide a customized message.



// class Vehicle {

//     start(){
//         console.log("Vehicle started!");
//     }
// }


// class Car extends Vehicle { 

//     start(){
//        console.log("Car started!");
//     }
// }

// class Motorcycle extends Vehicle { 

//     start(){
//        console.log("Motorcycle started!");
//     }
// }





// Question 3: Encapsulation in JavaScript
// Problem Statement:

// You are building a simple banking system. Implement a BankAccount class with private properties accountNumber and balance. Create methods for deposit and withdraw that modify the balance property accordingly.

// Problem Description:

// Create a class BankAccount with private properties accountNumber and balance. The accountNumber should be generated automatically when a new account is created.

// Implement a private method generateAccountNumber to generate a unique account number for each account.

// Implement public methods deposit and withdraw that allow users to modify the balance property. Ensure that withdrawals cannot result in a negative balance.


class BankAccount{ 

    #accountNumber;
    #balance;

    constructor(){
        this.#accountNumber  = this.#generateAccountNumber();
        this.#balance = 0;
    }

    #generateAccountNumber(){
        return   Math.floor(Math.random() * 1000000);
    }


    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }
    withDraw(amount){

        if(amount > this.#balance){
         return "Insufficient Funds";
        }

        this.#balance-=amount;
        return this.#balance;
    }

}