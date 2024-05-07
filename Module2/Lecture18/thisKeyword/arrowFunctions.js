// const add = (a,b)=>{
//     return a+b;
// }

// console.log(add(4,6));

// var person = {
//     name:"Utkarsh",
//     age:31,
//     sayHi:()=>{
//         console.log(this);
//     }
// }

// person.sayHi();






//question 2


// var person = {

//     name:"Utkarsh",
//     age:31,
//     sayHi:function(){
//         console.log(this);

//         var child=()=>{
//         console.log(this);
//         }

//         child();
//     }
// }

// person.sayHi();

//question 3


// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         var iAmInner = () => {
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();



//question 4 

var firstName = "Loki"
let cap = {
    firstName : "Steve",
    sayHi : () => {
        console.log("53", this.firstName);
        const iAmInner = () => {
            console.log("55", this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();


// iAmInner() does not have its own this. So it will go to sayHi() to get their this
//  and sayHi() is also an arrow function so it will also not have its own this.





var b = {
  name: 'jay',
  say:function() { 
    
    console.log(this) 
}
}

var c = {
  name: 'jay',
   say:function() { 
    return function (){
         console.log(this) 
    }
    }
}

var d = {
  name: 'jay',
  say() { 
    
    return () => console.log(this) 
}
}

b.say()
c.say()()
d.say()()  