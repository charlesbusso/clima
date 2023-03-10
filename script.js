
let apiKey = "f7beb48e5ddcfaa49760ec0218e9dbb8";
let apiCountryURL = "https://flagsapi.com/BR/flat/64.png";
let cityInput = document.querySelector("#city-input");
let searchBtn = document.getElementById("search");
let cityElement = document.querySelector("#city");
let tempElement = document.querySelector("#temperature span");
let descElement = document.querySelector("#description");
let weatherIconElement = document.querySelector("#weather-icon");
let countryElement = document.querySelector("#country");
let umidityElement = document.querySelector("#umidity span");
let windElement = document.querySelector("#wind span");
//funçoes

const getWeatherData = async(city) => {
    const apiWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={apiKey}&lang=pt_br";
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    console.log(data);
};

const showWeatherData = (city) => {
    getWeatherData(city);
};

searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
    
});



