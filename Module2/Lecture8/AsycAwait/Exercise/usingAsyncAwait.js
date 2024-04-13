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

async function serveOrder(drink){
    try{
        let orderStatus = await placeOrder(drink);
        let processedOrder = await processOrder(orderStatus);
        let billGenerated = await generateBill(processedOrder);
        console.log(billGenerated);

    }
    catch(err){
        console.log(err);
    }
}

serveOrder("coffee");