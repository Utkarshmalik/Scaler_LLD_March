// Question 1: Understanding this in Object Methods
// Problem Description:
// Create an object user with a method getFullName that returns the full name of the user. Use the this keyword to access the object properties inside the method.


// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };

// console.log(user.getFullName());



// Question 2: this in Constructor Functions
// Problem Description:
// Create a constructor function Person that takes name as a parameter and initializes the object with the provided name. Use the this keyword inside the constructor.




// function Person(name) {
//     this.name = name;
//   }



// function Person(firstName, lastName){
//     this.firstName= firstName;
//     this.lastName = lastName;
//     this.getFullName = function(){
//         return "My full name is ",this.firstName + " " + this.lastName;
//     }

// }

// const person1 =  new Person("Utkarsh","malik");
// const person2 = new Person("Rahul","Jain");

// console.log(person1.getFullName());
// console.log(person2.getFullName());


// Question 5: this in Nested Objects
// Problem Description:
// Create an object car with properties make and engine. The engine property should be another object with a method start that logs "Car started: [make]". Use the this keyword to access the make property.


// const car = {
//     make: "Honda",
//     engine: {
//         start: function(){
//         console.log(`Car started: ${this.make}`);
//         }
//     }
// }

// car.engine.start();
