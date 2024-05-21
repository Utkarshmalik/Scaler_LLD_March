function clone(obj){

    let newObj={};

    for(let key in obj){

        //if its non primitive 
        if(typeof obj[key] ==='object'){

            //its either a array or a object 

            let innerCopiedObj = clone(obj[key]);

            if(Array.isArray(obj[key])){

                newObj[key]= Object.values(innerCopiedObj)
            }else{
            newObj[key] = innerCopiedObj;
            }

        }else{
            newObj[key] = obj[key];
        }

    }

    return newObj;

}

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



let wife  = clone(husband);


wife.address.street= "3rd street";

wife.firstName = "Shreya";

console.log(husband);
console.log(wife);
