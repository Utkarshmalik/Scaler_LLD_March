function calculateFibonacci(number){

    if(number<=1){
        return number;
    }

    return calculateFibonacci(number-1) + calculateFibonacci(number-2);
}


process.on("message",(msg)=>{
    const result = calculateFibonacci(msg.number);
    process.send(result);
})