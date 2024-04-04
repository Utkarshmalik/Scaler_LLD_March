// We are given an array, which has the radius of different circles, we need to find the area, circumference and diameter for all the radiuses.

//PseudoCode


// let myRadiusArray = [2, 3, 4, 5, 8]


// function calculateArea(radiusArr){
//     let result = []
//     for(let i = 0 ; i < radiusArr.length ; i ++ ){
//         result.push(3.14 * radiusArr[i] * radiusArr[i])
//     }
//     return result
// }

// let finalAreas = calculateArea(myRadiusArray)
// console.log('This is area array => ', finalAreas)


// function calculateCircumference(radiusArr){
//     let result = []
//     for(let i = 0 ; i < radiusArr.length ; i ++ ){
//         result.push( 2 * Math.PI * radiusArr[i])
//     }
//     return result
// }

// let finalCircumferences = calculateCircumference(myRadiusArray)
// console.log('This is Circumference array =>', finalCircumferences)


// function calculateDiameter(radiusArr){
//     let result = []
//     for(let i = 0 ; i < radiusArr.length ; i ++ ){
//         result.push(radiusArr[i] * 2)
//     }
//     return result
// }

// let finalDiameters = calculateDiameter(myRadiusArray)
// console.log('This is Diameter array =>', finalDiameters)



let myRadiusArray = [2, 3, 4, 5, 8]

function circleArea(radius){
    return Math.PI * radius * radius;
}
function circleCircumference(radius){
    return 2 * Math.PI * radius;
}
function circleDiameter(radius){
    return 2 * radius;
}

function calculate(radiusArr, logic){
      let result = []
    for(let i = 0 ; i < radiusArr.length ; i ++ ){
        result.push(logic(radiusArr[i]))
    }
    return result
}

let finalAreas = calculate(myRadiusArray, circleArea)
console.log('This is area array => ', finalAreas)


let finalCircumferences = calculate(myRadiusArray, circleCircumference)
console.log('This is Circumference array =>', finalCircumferences)


let finalDiameter = calculate(myRadiusArray,  circleDiameter)
console.log('This is Diameter array =>', finalDiameters)