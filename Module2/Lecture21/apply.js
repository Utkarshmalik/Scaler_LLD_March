// The apply() method is similar to call(), but it accepts arguments as an array.


// functionName.apply(thisArg, [argsArray]);

// functionName: The function to be called.
// thisArg: The value to be passed as this to the function.
// argsArray: An array-like object containing arguments to be passed to the function.

// const parent = {
//     health:50,
//     addHealth: function (num1,num2){
//         this.health+= num1+num2;
//     }
// }

// const child = {
//     health:70
// }



// // parent.addHealth.call(child, 60,70);

// parent.addHealth.apply(child, [50,70]);


// console.log(child.health);





// const person = {

//     fullName:function(){
//         return this.firstName + " " + this.lastName;
//     }

// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// };

// const person2 = {
//     firstName: "Mary",
//     lastName: "Smith"
// };

// const result1 = person.fullName.apply(person1);
// console.log(result1);

// const result2  = person.fullName.apply(person2);
// console.log(result2);






// let cap = {
//     name: "Steve",
//     team: "Cap",
//     petersTeam: function (mem1, mem2, ...otherMem) {
//         console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
//         console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
//     }
// }

// let ironMan = {
//     name: "Tony",
//     team: "Iron Man"
// }



// // cap.petersTeam.call(ironMan, "Utkarsh","Rahul","Shreya");


// cap.petersTeam.apply(ironMan,["Utkarsh","Rahul","Jay"]);






// Scenario: Calculating Maximum of Array Elements

const numbers = [5, 6, 2, 3, 7];

// Math.max(1,3,5,6,7);

const results  = Math.max.apply(null, numbers);

console.log(results);
