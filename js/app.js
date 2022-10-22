const API_KEY = '289973b5c846d233e2d0d32259a3b25f';

const btnSearch = document.getElementById('btn-search');
btnSearch.addEventListener('click', (e) => {
    const cityName = document.getElementById('input-city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => displayWeatherInfo(data));

});

const city = document.getElementById('city-name');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const weatherIcon = document.getElementById('weather-icon');
const displayWeatherInfo = (data) => {
    console.log(data);
    const weatherIconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', weatherIconSrc);
    city.innerText = data.name;
    const tempData = ((data.main.temp) / 10).toFixed(2);
    temp.innerText = tempData;
    weather.innerText = data.weather[0].main;

}