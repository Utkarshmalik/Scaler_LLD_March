
// numbers 
// strings 
// arrays 
// objects 
// functions 

// // primitive and references 


// let x=5;

// let name = "Utkarsh";

// let isMarried = true;


// let person = {
//     name:"Utarsh",
//     age:28
// }

// let likes = ["golf","fruits"];


// function add(a,b){
//     return a+b;
// }




// let husband = {

//     firstName:"John",
//     lastName:"Doe",
//     address:{
//         street:"North 1st street",
//         city :"Sn Jose",
//         state:"CA",
//         country:"USA"
//     },
//     friends:["Steve","Nikola","Ray"]
// }


// let wife = {
//     firstName:"Ray",
//     lastName:"Waston"
// }
// wife.address = husband.address;



// //after few years 

// wife.address.street="North 2nd street";
// wife.address.state="CA";
// wife.address.country="USA";


// console.log(wife.address.street);
// console.log(husband.address.street);




//create a copy of an object in JS


// let husband = {

//     firstName:"John",
//     lastName:"Doe",
//     address:{
//         street:"North 1st street",
//         city :"Sn Jose",
//         state:"CA",
//         country:"USA"
//     },
//     friends:["Steve","Nikola","Ray"]
// }


// let wife = {...husband};


// wife.address.street= "3rd street";

// wife.firstName = "Shreya";

// console.log(husband);
// console.log(wife);






let husband = {

    firstName:"John",
    lastName:"Doe",
    address:{
        street:"North 1st street",
        city :"Sn Jose",
        state:"CA",
        country:"USA"
    },
    friends:["Steve","Nikola","Ray"]
}

let husbandJSON  = JSON.stringify(husband);



let wife  = JSON.parse(husbandJSON);


wife.address.street= "3rd street";

wife.firstName = "Shreya";

console.log(husband);
console.log(wife);

