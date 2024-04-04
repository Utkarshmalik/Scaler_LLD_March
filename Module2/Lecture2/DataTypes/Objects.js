// var x=5;
// var y=x;

// x++;

// console.log(x);
// console.log(y);


// Objects are basically in which data is stored in the form of key-value pairs.

// let person1 = {
//     name:"Utkarsh",
//     age:31,
//     phone :12345343
// }



// let person2 = person1;


// person1.age++;


// console.log(person1.age);
// console.log(person2.age);




// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.phone);
// console.log(person1.isMarried);










let captainAmerica ={
    name : 'Steve Rogers',
    age : 102,
    // Array
    allies : ['Tony', 'bruce', 'bucky'],

    // function inside an object
    sayHi : function(){
        console.log('Captain says hi')
    },
    // nested object
    address :{
        country : 'USA',
        city : {
            name : 'Brokkly',
            pincode : 12345
        }
    },

    // Boolean
    isAvenger : true,

    movies : []
}


// console.log(captainAmerica["name"])

// accessing age from captainAmerica object
console.log(captainAmerica.age);

// accessing element of array allies from captainAmerica object
console.log(captainAmerica.allies[1]);

// accessing element from the nested object
console.log(captainAmerica.address.city.name);

// calling function defined within an object
console.log(captainAmerica.sayHi())



captainAmerica.isAvenger = false;

console.log(captainAmerica.isAvenger);

console.log(captainAmerica.movies);

// adding new key-value in object
captainAmerica.movies = ["End Game","Age of Ultorn","Civil Wars"];

console.log(captainAmerica.movies);



console.log(captainAmerica.allies);

//Deleting key from an object
delete captainAmerica.allies;


console.log(captainAmerica.allies);


let husband ={
    name : 'Steve Rogers',
    age : 102,
    // Array
    allies : ['Tony', 'bruce', 'bucky'],

    // function inside an object
    sayHi : function(){
        console.log('Captain says hi')
    },
    // nested object
    address :{
        country : 'USA',
        city : {
            name : 'Brokkly',
            pincode : 12345
        }
    },

    // Boolean
    isAvenger : true,

    movies : []
}


let wife = husband;



wife.address.country="India";
wife.address.city.name="Delhi";




console.log(husband.address.country);
console.log(husband.address.city.name);






const person={
    name:"Utkarsh",
    age:29
}


let someVariable = "age";

console.log(person.name);
console.log(person.someVariable);


console.log(person["name"]);
console.log(person[someVariable]); console.log(person["age"]);  //29




