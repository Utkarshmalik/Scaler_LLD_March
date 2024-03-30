/*
     Code Excution : always exec in EC (Execution Context)
   1. GEC : Global execution Context : When you run a JS program
   2. FEC : Functional Exectuion Context : On EveryFunction call 
*/


     // 1.  EC creation
            // 1.a Hoisting -> memory allocation
                                // variable -> undefined;
                                // fn -> get it's memory allocated
                // 2. global -> browser -> window/nodejs-> global-> features
                // 3. outer scope-> outer var
                // 4. this-> always calculated
    //  2. EC Code execution
           



// var a =2;
// var b = 3;
// var c= 40;
// var d=50;


// function add(x,y){
//     return x+y;
// }

// var result1 = add(a,b);
// var result2= add(c,d);

// console.log(result1);
// console.log(result2);


// var a = 10;

// function fn() {
//     console.log("I am fn");

//     function inner() {
//         console.log("I am inner");
//     }


//     inner();
// }

// fn();




// console.log(a);
// var a;
// a=5;






// var ans=add(4,5);
// console.log(ans);

// function add(a,b){
//     return a+b;
// }





// var ans= add(4,5);

// console.log(ans);

// var add = function(a,b){
//     return a+b;
// }





console.log(a);
let a;
a=5;


// Temporal Dead Zone: The TDZ ensures that variables declared with const or let are not accessed before they are initialized within their block. This restriction ensures predictable behavior and helps catch potential bugs caused by accessing variables before they are ready for use.

