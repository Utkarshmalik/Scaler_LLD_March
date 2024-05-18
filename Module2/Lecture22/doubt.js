// Polyfills Assignment Q1] Can you discuss this question ? Raw Problem

// Write a polyfill for the apply method in JavaScript. You need to complete the function applyPolyfill which takes three inputs:

// fn - A function on which apply method needs to be polyfilled.
// context - The value of this to be used when calling the function.
// args - An array of arguments to be passed to the function.
// The function applyPolyfill(fn, context, args), when called, should behave in a similar fashion as the inbuilt 



// Refrain from using the inbuilt Function.protoype.apply() function in JS, trivial test case would 
// check for that. 



function applyPolyfill(fn,context,args){

    context.functionToExecute = fn;

    return context.functionToExecute(...args);

}

function greet(country) { 
    return 'Hello, ' + this.name + ' from '+ country;
} 

const person = {
name: 'John',
}; 


const result = applyPolyfill(greet, person, ['India']);

console.log(result);

// Output:
// Hello, John! from India

// Here Hints are not given in Main but with hints i can see many other things needed to solve so can you write this code & explain ? At the end.