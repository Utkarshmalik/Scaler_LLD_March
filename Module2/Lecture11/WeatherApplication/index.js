const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");
const apiKey = "35af7ff606db422880d141328231305";
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const dateField = document.querySelector(".time_location span");

form.addEventListener("submit",search);

function search(e){

    e.preventDefault();
    
    const searchValue = searchField.value;

    fetchData(searchValue);

}


async function fetchData(query){


    console.log("making an api call to fetch the data for query ",query);

    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;

       console.log("making an api call to fetch the data with url ",url);

       try{

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
        

        let currentTemp = data.current.temp_c;
        let currentCondition = data.current.condition.text
        let locationName = data.location.name
        let localTime = data.location.localtime
        let conditionEmoji = data.current.condition.icon

        console.log(currentTemp ,currentCondition ,locationName , localTime , conditionEmoji )

        updateDOM(currentTemp,locationName,localTime,conditionEmoji,currentCondition);


       }
       catch(err){

        console.log("Something went wrong ",err.message);
       }

}

function updateDOM(temp,locationName, time,emoji,condition){


    temperatureField.innerText=temp;
    cityField.innerText = locationName;
    emojiField.src = emoji;
    weatherField.innerText  = condition;

    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];

    const exactDay =  getDayFullName(new Date(exactDate).getDay());
  
    dateField.innerText = `${exactTime}  ${exactDay} ${exactDate}`


}



function getDayFullName(num) {
    switch (num) {
      case 0:
        return "Sunday";

      case 1:
        return "Monday";

      case 2:
        return "Tuesday";

      case 3:
        return "Wednesday";

      case 4:
        return "Thursday";

      case 5:
        return "Friday";

      case 6:
        return "Saturday";

      default:
        return "Don't Know";
    }
  }


// Default Action: When an event occurs, the browser often performs some default action associated with that event. For example, when you click on a link (<a> tag), the browser navigates to the URL specified in the link's href attribute.

// preventDefault(): This is a method available on the event object (e) in JavaScript. When you call e.preventDefault(), you're telling the browser not to execute the default action associated with the event. So, if you're handling a click event on a link, calling e.preventDefault() will prevent the browser from navigating to the link's URL.