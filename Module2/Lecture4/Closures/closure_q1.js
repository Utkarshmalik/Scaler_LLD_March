//infinite currying

function counter(args){
    
    let count=1;

    if(args===0){
        return count;
    }

    return function inner(args){

        count++;

        if(args===0){
            return count;
        }
        else{
            return inner;
        }
    }
}

// console.log(counter(0)) // print 1
// console.log(counter()(0))  // print 2
// console.log(counter()()(0))  // print 3
// console.log(counter()()()(0))  // print 4
console.log(counter()()()()(0))  // print 5











//  function sum(args) {

//  }

// console.log(sum(3)(4)());  // 7

// console.log(sum(3)(7)(8)()); //18 

// console.log(sum(1)(7)(8)(5)()); // 21 

// console.log(sum()); // 0
