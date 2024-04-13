// we have a problem that we are at a coffee shop and the now the coffee shop only has coffee we cannot order for any other drink , it will reject if any other drink is ordered and if s coffee is ordered it will be accepted then it will be processed then it will be serverd and at the end we will recieve a bill



function placeOrder(drink){

    return new Promise((resolve,reject)=>{

        if(drink==="coffee"){
            resolve("Order for coffee is placed");
        }else{
            reject("Order cannot be placed")
        }

    })
}

function processOrder(orderPlaced){

    return new Promise((resolve,reject)=>{
        resolve(`${orderPlaced} and processed`)
    })
}

function generateBill(processedOrder){

    return new Promise((resolve,reject)=>{
        resolve(`${processedOrder} and Bill generated with 2000Rs`)
    })
}

placeOrder("coffee")
.then(orderStatus=>{
    return orderStatus
})
.then((orderStatus)=>{
    let orderIsProcessed= processOrder(orderStatus);
    return orderIsProcessed;
})
.then((orderProcessed)=>{

    let billGenerated = generateBill(orderProcessed);
    return billGenerated
})
.then((data)=>{
    console.log(data);
})
.catch(err=>{
    console.log(err)
})