
const stars = document.querySelectorAll(".star");
const ratingDisplay = document.getElementById("rating");


stars.forEach((star)=>{

    star.addEventListener("click",()=>{
        const value = parseInt(star.getAttribute("data-value"));

        updateRating(value);
    })

})


function updateRating(value){

    stars.forEach((star)=>{

        const starValue = parseInt(star.getAttribute("data-value"));
        star.classList.remove("filled");
        
        if(starValue<=value){
            star.classList.add("filled");
        }

        ratingDisplay.textContent = value;

    })

}