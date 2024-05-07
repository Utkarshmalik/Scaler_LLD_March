"use strict";
console.log(this);




function myFunction() {
  console.log(this);
}

myFunction();



"use strict";
var obj = {
  prop: "I'm a property",
  method: function() {
    console.log(this.prop);
  }
};

obj.method();


"use strict";
var outerObj = {
  innerObj: {
    method: function() {
      console.log(this);
    }
  }
};

outerObj.innerObj.method();