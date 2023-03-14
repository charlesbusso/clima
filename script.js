//https://flagsapi.com/BR/flat/64.png
//f7beb48e5ddcfaa49760ec0218e9dbb8
//f7beb48e5ddcfaa49760ec0218e9dbb8
let apiKey = "f7beb48e5ddcfaa49760ec0218e9dbb8";
let apiCountryURL = "https://countryflagsapi.com/png/";
let cityInput = document.querySelector("#city-input");
let searchBtn = document.getElementById("search");
let cityElement = document.querySelector("#city");
let tempElement = document.querySelector("#temperature span");
let descElement = document.querySelector("#description");
let weatherIconElement = document.querySelector("#weather-icon");
let countryElement = document.querySelector("#country");
let humidityElement = document.querySelector("#humidity span");
let windElement = document.querySelector("#wind span");
let weatherContainer = document.querySelector('#weather-data');


//funçoes
  
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();
     return data;
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerHTML = parseInt(data.main.temp)
    descElement.innerHTML = data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed}Km/h`;
    weatherContainer.classList.remove("hide")
   
};

searchBtn.addEventListener("click",(e) => {
    e.preventDefault();
   
    const city = cityInput.value;

    showWeatherData(city);

});

cityInput.addEventListener("keyup", (e) => {
    let city = e.target.value
    showWeatherData(city);
})




