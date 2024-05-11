 
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//        this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
// };

//  }


//  let person1 = new Person('Jane','Doe')
// let person2 = new Person('James','Smith')
// let person3 = new Person('Utkarsh','Malik')

// console.log(person1);
// console.log(person2);
// console.log(person3);



// The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.




 
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//  }

//  Person.prototype.getFullName = function () {
//         return this.firstName + " " + this.lastName;
// };

//  let person1 = new Person('Jane','Doe')
// let person2 = new Person('James','Smith')
// let person3 = new Person('Utkarsh','Malik')


// console.log(Person.prototype);

// console.log(person1.__proto__);

// console.log(person1.__proto__ === Person.prototype);

// console.log(person2.__proto__ === Person.prototype);

// console.log(person1.__proto__.__proto__ == Object.prototype);


// console.log(person1.__proto__ === person3.__proto__);




// The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.






// let arr1  = new Array(1,2,3,4,5,6);
// let arr2  = new Array(6,7,8,9,10,11,12);


// console.log(arr1.__proto__  === Array.prototype);
// console.log(arr1.__proto__.__proto__ === Object.prototype);
// console.log(arr1.__proto__.__proto__.__proto__ === null );
// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);

// console.log(arr2.__proto__  === Array.prototype);
// console.log(arr1.__proto__  === arr2.__proto__);

// console.log(arr1.toString());
// console.log(arr2.toString());


console.log(arr1.valueOf());
console.log(arr1);




// let obj1=new Object({
//     name:"Utkarsh",
//     age:31})

// let obj1={
//     name:"Utkarsh",
//     age:31
// }


// let obj2={
//     name:"Rahul",
//     age:31
// }

console.log(Object.prototype);
// console.log(obj1.__proto__ === Object.prototype);
// console.log(obj2.__proto__ === Object.prototype);
// console.log(obj1.__proto__ === obj2.__proto__);

// console.log(obj1.toString());
// console.log(obj2.toString());