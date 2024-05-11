// Object.create() is a method in JavaScript used to create a new object with the specified prototype object and optional properties. 

const shape = {
    type: 'Shape',
    getType: function() {
        return this.type;
    },
    describe: function() {
        return `This is a ${this.getType()}.`;
    }
};

const circle = Object.create(shape);
circle.radius = 5;
circle.type = 'Circle';
circle.area = function() {
    return Math.PI * this.radius ** 2;
};


const square = Object.create(shape);
square.sideLength = 4;
square.type = 'Square';
square.area = function() {
    return this.sideLength ** 2;
};


console.log(circle.describe());