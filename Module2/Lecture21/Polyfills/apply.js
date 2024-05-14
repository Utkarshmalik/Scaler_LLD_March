Function.prototype.customApply = function (requiredObject, args){

    const functionToExecute  = this;

    requiredObject.functionToExecute = functionToExecute;

    requiredObject.functionToExecute(...args);

    delete requiredObject.functionToExecute;

}


const parent = {
    health:50,
    addHealth: function (num1,num2){
        this.health+= num1+num2;
    }
}

const child = {
    health:70
}




parent.addHealth.customApply(child, [50,70]);


console.log(child.health);


