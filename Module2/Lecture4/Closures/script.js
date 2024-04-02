

// Closure is a JavaScript lexical scoping technique used to preserve variables from a function's outer scope in its inner scope.


/**
 * Closure : inner fn forms closure over outer fn's variable and it's variables are persent 
 * even if outer fn is removed from the stack . (only if outer variable is used inside)
 * 
 *  When closure is fromed -> when a inner fn is hoisted it form closure over outer variable
 * */


//Problem 

function outerFunction() {
    var count = 0;
    function test(){

    }
    function innerFunction() {
        test();
    }
    return innerFunction
}


var innerFunc = outerFunction();
console.log(innerFunc())



var a=5;

function grandParent(){
    var b=6;
    function parent(){
        var c=7;
        function child(){
            var d=8;
            return a+b+c+d;
        }
        return child;
    }

    return parent;
}

var parent=grandParent();
var child = parent();
var ans=child();
console.log(ans);