const apiKey = "0847830093705fefdd0d08501cd18ea4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const respone = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await respone.json();

    if(respone.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/Clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/download.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/Drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/Mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector('.error').style.display = "none";
    }

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown", (event) =>{
    if (event.keyCode === 13){
        checkWeather(searchBox.value);
    }
})

checkWeather();