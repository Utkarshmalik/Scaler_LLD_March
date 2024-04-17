

// Selecting elements
// getElementById() – select an element by id.
// getElementsByName() – select elements by name.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select elements by CSS selectors.


// const p = document.getElementById("message");

// console.log(p);


// let item = document.getElementById("item");

// let items = document.getElementsByClassName("item")
// console.log(items);


    // let elementList = parentNode.querySelectorAll(selector);



// 1) Universal selector (*)


// let element = document.querySelector('*');
// let elements = document.querySelectorAll('*');



const elements = document.getElementsByTagName('h2');

console.log(elements);