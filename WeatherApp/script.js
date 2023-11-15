const api= "9fa6d5c0fe56fb79b066fcf1be854fe2";
const weatherData = document.getElementById('weather-data');
const cityData = document.getElementById("city");
const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue = cityData.value;
    console.log(cityValue);
    getWeatherData(cityValue);

});

async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api}&units=metric`)

        if(!response.ok) {
            throw new Error("PLease check your network connection!!");
        }
        const data = await response.json();
        console.log(data);
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${data.main.feels_like}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed : ${data.wind.speed}m/s`
        ]

       weatherData.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`;
        weatherData.querySelector(".temperature").textContent=`${temperature}°C`;
        weatherData.querySelector(".description").textContent=`${description}`;
        weatherData.querySelector(".details").innerHTML=details.map((detail)=>`<div>${detail}</div>`).join("")
    


    }
    catch(error){
        weatherData.querySelector(".icon").innerHTML='';
        weatherData.querySelector(".temperature").textContent='';
        weatherData.querySelector(".description").textContent='Please check the City';
        weatherData.querySelector(".details").innerHTML=''
    }
}