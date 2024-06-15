
// function app(){

//     console.log(this);
// }

// app();


let obj={
    name:"Utkarsh",
    sayHi:()=>{
        console.log(this.name);
    }
}

obj.sayHi();


// function Person(name){

//     //let this={}
//     this.name=name;
//     //return this
// }

// let person = new Person("Utkarsh");
// console.log(person);