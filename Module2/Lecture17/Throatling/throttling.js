
// <!-- throaltig: 0.5sec

// 0sec 0.1ssec 0.6sec 0.8sec 0.9sec 1.2sec 1.5sec 1.7sec

// Y     N       Y       N     N      Y       N     Y

//  -->



const button = document.querySelector("button");

function throatle(fnToMakeNetworkCall, interval=500){

    let intervalInProgess = false;

    return function(e){

        console.log("Button is clicked");

        if(intervalInProgess){
            console.log("Return , as interval is still in progress");
            return;
        }


        fnToMakeNetworkCall(e);
        intervalInProgress = true;

            setTimeout(()=>{
            intervalInProgress = false
        },interval)

    }


}


const throatledButtonClick = throatle(makeANetworkCall);

button.addEventListener("click",throatledButtonClick);


function makeANetworkCall(e){
    console.log("making a network call with input ", e.target.value);
}



// This throttling technique is particularly useful for improving performance in web applications. It reduces the number of times potentially expensive operations are executed during rapid, continuous events like scrolling. By limiting the frequency of updates, the script minimizes the workload on the browser, leading to smoother scrolling and a better user experience.

