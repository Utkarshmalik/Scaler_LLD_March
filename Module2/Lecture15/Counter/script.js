const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const countDisplay = document.getElementById('count');


let count=0;


decrementButton.addEventListener("click",()=>{

    if(count>0){
    count--;
    countDisplay.textContent = count;
    }
})


incrementButton.addEventListener("click",()=>{
    
    count++;
    countDisplay.textContent = count;
})


resetButton.addEventListener("click",()=>{
    
    count=0;
    countDisplay.textContent = count;
})