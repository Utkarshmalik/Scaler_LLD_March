
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