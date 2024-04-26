//Variáveis e seleções de elementos https://api.openweathermap.org/data/2.5/weather?q=Paulista&units=metric&appid=9ce073af08c2e903acdc9d1730b91999
const apiKey = "9ce073af08c2e903acdc9d1730b91999";
const cityInput = document.querySelector("#city-input");
const searchBt = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");



//funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;

};


const showWeatherData = async(city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
};






//Eventos
searchBt.addEventListener("click" , (e) => {
    e.preventDefault(); //evita enviar o formulário

    const city = cityInput.value;
    showWeatherData(city);
})

