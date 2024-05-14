
Function.prototype.customCall = function (requiredObject, ...args){

    const functionToExecute = this;

    requiredObject.functionToExecute = functionToExecute;

    requiredObject.functionToExecute(...args);

    delete requiredObject.functionToExecute;
    
}


const parent = {
    health:50,
    addHealth: function (num1,num2){
        this.health+= num1+num2;
    }
}

const child = {
    health:70
}

parent.addHealth.customCall(child, 60,70);

console.log(child);

console.log(child.health);

// console.dir(Function.prototype);

// console.log(parent.addHealth.__proto__ == Function.prototype);






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

// const result1 = person.fullName.customCall(person1);
// console.log(result1);

// const result2  = person.fullName.customCall(person2);
// console.log(result2);



