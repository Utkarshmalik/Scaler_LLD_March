
const input = document.querySelector("#input");


function debounce(fnToMakeANetworkCall, delay=1000){

    let timerId   = null;

    return function(e){

    console.log("User has entered ",e.target.value);


        if(timerId!=null){
        console.log("clearing thre previous timer");
          clearTimeout(timerId);
        }


        timerId = setTimeout(()=>{
            fnToMakeANetworkCall(e);
            timerId=null;
            },delay)
    }
}

const debouncedInputChange = debounce(makeANetworkCall);


input.addEventListener("input",debouncedInputChange);



function makeANetworkCall(e){

    console.log("making a network call with input ",e.target.value);

}