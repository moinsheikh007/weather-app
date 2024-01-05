/* const url = "https://api.openweathermap.org/data/2.5/weather?q=New York&appid="

const apiKey = "b0921993cbec62f2296be4f990cdfa03"

async function getWeather () {
    const response = await fetch(url + apiKey);
    const data = await response.json();
    console.log(data)

    document.getElementById('temp').innerHTML = data.main.temp;
    document.getElementById('city').innerHTML = data.name;
}

getWeather() */





const url = `https://api.openweathermap.org/data/2.5/weather?appid=b0921993cbec62f2296be4f990cdfa03&units=metric&q=`;

async function checkWeather (city) {
    const response = await fetch(url + city);
    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block';
    }
    else {
        document.querySelector('.error').style.display = 'none'
        const data = await response.json();
        console.log(data)

        document.getElementById('temp').innerHTML= Math.round(data.main.temp) + "°C";
        document.getElementById('city').innerHTML= data.name;
        document.getElementById('humidity').innerHTML= data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + "km/h"

        const weatherIcon = document.getElementById('weather-icon');

        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'image/clouds.png'
        }
        else if (data.weather[0].main === 'clear') {
            weatherIcon.src = 'image/clear.png'
        }
        else if (data.weather[0].main === 'drizzle') {
            weatherIcon.src = 'image/drizzle.png'
        }
        else if (data.weather[0].main === 'mist') {
            weatherIcon.src = 'image/mist.png'
        }
        else if (data.weather[0].main === 'rain') {
            weatherIcon.src = 'image/rain.png'
        }
        else if (data.weather[0].main === 'snow') {
            weatherIcon.src = 'image/snow.png'
        }
        }
    

}


const inputSearch = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function () {
    checkWeather(inputSearch.value)
    inputSearch.value = ""
})



