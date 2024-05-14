//  In JavaScript, call, apply, and bind are methods used to manipulate the this keyword and execute functions in specific contexts. 


// functionName.call(thisArg, arg1, arg2, ...);
// functionName: The function to be called.
// thisArg: The value to be passed as this to the function.

// arg1, arg2, ...: Arguments to be passed to the function.



const parent = {
    health:50,
    addHealth: function (num1,num2){
        this.health+= num1+num2;
    }
}

const child = {
    health:70
}

// parent.addHealth(10,20);


parent.addHealth.call(child, 60,70);

console.log(parent.health);
console.log(child.health);






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

// const result1 = person.fullName.call(person1);
// console.log(result1);

// const result2  = person.fullName.call(person2);
// console.log(result2);




let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man"
}


// cap.petersTeam("Utkarsh","Rahul","Jai");

cap.petersTeam.call(ironMan, "Utkarsh","Rahul","Shreya");






//Method Borrowing
