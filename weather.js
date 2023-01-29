//Get elements from DOM
const app = document.getElementById('weather-app');
const degrees = document.getElementById('temp');
const dateOutput = document.getElementById('date');
const conditions = document.getElementById('condition');
const cityName = document.getElementById('name');
const icn = document.getElementById('icon');
const citi = document.getElementById('cities');
const cloudCover = document.getElementById('cloud');
const humidness = document.getElementById('humidity');
const windSpeed = document.getElementById('wind');
const searchForm = document.getElementById('locationInput');
const searchBar = document.getElementById('search');
const btn = document.getElementById('submit');

//Default city
var cityInput = 'Eldoret';

// Preparing the local time for fetched city
const d = new Date();
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset() * 60000;
const utc = localTime + localOffset;    

//Get weather API from https://openweathermap.org/
async function fetchWeatherData(cityInput) {
    APIKEY = '3900d280408a21106e0b0d51ce3b74ef';
    BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

    //asynchronous data fetched
    const res = await fetch(`${BASE_URL}q=${cityInput}&appid=${APIKEY}&units=metric`);
    const weatherData = await res.json();

    return weatherData;
}

function weatherData() {
    fetchWeatherData(cityInput).then((json) => {
    //calculating the current date and time
    const cityTime = utc + (1000 * json.timezone);
    const nd = new Date(cityTime);

    //Filling weather details to the page
    degrees.innerHTML = Math.round(json.main.temp) + '&#176;';
    cityName.innerHTML = json.name;
    conditions.innerHTML = json.weather[0].description;
    dateOutput.innerHTML = nd.toLocaleString('en-GB');
    cloudCover.innerHTML = json.clouds.all + '%';
    humidness.innerHTML = json.main.humidity + '%';
    windSpeed.innerHTML = Math.round((json.wind.speed * 3.6) * 100) / 100 + ' km/h';

    //Weather icon
    const iconID = json.weather[0].icon;
    icn.src = 'http://openweathermap.org/img/wn/'+ iconID + '.png';

    //Change background with weather
    if (json.weather[0].main == 'Thunderstorm' || json.weather[0].main == 'Drizzle' || json.weather[0].main == 'Rain') {
        app.style.backgroundImage = "url('./Assets/images/rainy.jpg')";
    } else if (json.weather[0].main == 'Mist' || json.weather[0].main == 'Smoke' || json.weather[0].main == 'Haze' || json.weather[0].main == 'Dust' || json.weather[0].main == 'Fog' || json.weather[0].main == 'Sand' || json.weather[0].main == 'Ash' || json.weather[0].main == 'Squall' || json.weather[0].main == 'Tornado') {
        app.style.backgroundImage = "url('./Assets/images/foggy.jpg')";
    } else if (json.weather[0].main == 'Snow') {
        app.style.backgroundImage = "url('./Assets/images/snowy.jpg')";
    } else if (json.weather[0].main == 'Clear') {
        app.style.backgroundImage = "url('./Assets/images/clear.jpg')";
    } else {
        app.style.backgroundImage = "url('./Assets/images/cloudy.jpg')";
    }

    //Filling in the LED circles
    //Cloud cover
    const x = json.clouds.all;
    switch (true) {
        case (x <= 100 && x > 90):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "limegreen";
            document.getElementById('bit6').style.backgroundColor = "yellow";
            document.getElementById('bit5').style.backgroundColor = "yellow";
            document.getElementById('bit4').style.backgroundColor = "yellow";
            document.getElementById('bit3').style.backgroundColor = "orange";
            document.getElementById('bit2').style.backgroundColor = "orange";
            document.getElementById('bit1').style.backgroundColor = "red";
            document.getElementById('bit0').style.backgroundColor = "red";
            break;
        case (x <= 90 && x > 80):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "limegreen";
            document.getElementById('bit6').style.backgroundColor = "yellow";
            document.getElementById('bit5').style.backgroundColor = "yellow";
            document.getElementById('bit4').style.backgroundColor = "yellow";
            document.getElementById('bit3').style.backgroundColor = "orange";
            document.getElementById('bit2').style.backgroundColor = "orange";
            document.getElementById('bit1').style.backgroundColor = "red";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        case (x <= 80 && x > 70):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "limegreen";
            document.getElementById('bit6').style.backgroundColor = "yellow";
            document.getElementById('bit5').style.backgroundColor = "yellow";
            document.getElementById('bit4').style.backgroundColor = "yellow";
            document.getElementById('bit3').style.backgroundColor = "orange";
            document.getElementById('bit2').style.backgroundColor = "orange";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        case (x <= 70 && x > 60):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "limegreen";
            document.getElementById('bit6').style.backgroundColor = "yellow";
            document.getElementById('bit5').style.backgroundColor = "yellow";
            document.getElementById('bit4').style.backgroundColor = "yellow";
            document.getElementById('bit3').style.backgroundColor = "orange";
            document.getElementById('bit2').style.backgroundColor = "LightGray";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        case (x <= 60 && x > 50):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "limegreen";
            document.getElementById('bit6').style.backgroundColor = "yellow";
            document.getElementById('bit5').style.backgroundColor = "yellow";
            document.getElementById('bit4').style.backgroundColor = "yellow";
            document.getElementById('bit3').style.backgroundColor = "LightGray";
            document.getElementById('bit2').style.backgroundColor = "LightGray";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        case (x <= 50 && x > 40):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "limegreen";
            document.getElementById('bit6').style.backgroundColor = "yellow";
            document.getElementById('bit5').style.backgroundColor = "yellow";
            document.getElementById('bit4').style.backgroundColor = "LightGray";
            document.getElementById('bit3').style.backgroundColor = "LightGray";
            document.getElementById('bit2').style.backgroundColor = "LightGray";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        case (x <= 40 && x > 30):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "limegreen";
            document.getElementById('bit6').style.backgroundColor = "yellow";
            document.getElementById('bit5').style.backgroundColor = "LightGray";
            document.getElementById('bit4').style.backgroundColor = "LightGray";
            document.getElementById('bit3').style.backgroundColor = "LightGray";
            document.getElementById('bit2').style.backgroundColor = "LightGray";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        case (x <= 30 && x > 20):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "limegreen";
            document.getElementById('bit6').style.backgroundColor = "LightGray";
            document.getElementById('bit5').style.backgroundColor = "LightGray";
            document.getElementById('bit4').style.backgroundColor = "LightGray";
            document.getElementById('bit3').style.backgroundColor = "LightGray";
            document.getElementById('bit2').style.backgroundColor = "LightGray";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        case (x <= 20 && x > 10):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "limegreen";
            document.getElementById('bit7').style.backgroundColor = "LightGray";
            document.getElementById('bit6').style.backgroundColor = "LightGray";
            document.getElementById('bit5').style.backgroundColor = "LightGray";
            document.getElementById('bit4').style.backgroundColor = "LightGray";
            document.getElementById('bit3').style.backgroundColor = "LightGray";
            document.getElementById('bit2').style.backgroundColor = "LightGray";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        case (x <= 10 && x >= 0):
            document.getElementById('bit9').style.backgroundColor = "limegreen";
            document.getElementById('bit8').style.backgroundColor = "LightGray";
            document.getElementById('bit7').style.backgroundColor = "LightGray";
            document.getElementById('bit6').style.backgroundColor = "LightGray";
            document.getElementById('bit5').style.backgroundColor = "LightGray";
            document.getElementById('bit4').style.backgroundColor = "LightGray";
            document.getElementById('bit3').style.backgroundColor = "LightGray";
            document.getElementById('bit2').style.backgroundColor = "LightGray";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
        default:
            document.getElementById('bit9').style.backgroundColor = "LightGray";
            document.getElementById('bit8').style.backgroundColor = "LightGray";
            document.getElementById('bit7').style.backgroundColor = "LightGray";
            document.getElementById('bit6').style.backgroundColor = "LightGray";
            document.getElementById('bit5').style.backgroundColor = "LightGray";
            document.getElementById('bit4').style.backgroundColor = "LightGray";
            document.getElementById('bit3').style.backgroundColor = "LightGray";
            document.getElementById('bit2').style.backgroundColor = "LightGray";
            document.getElementById('bit1').style.backgroundColor = "LightGray";
            document.getElementById('bit0').style.backgroundColor = "LightGray";
            break;
    }

    //Humidity        
    const b = json.main.humidity;
    switch (true) {
        case (b <= 100 && b > 90):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "limegreen";
            document.getElementById('bit17').style.backgroundColor = "limegreen";
            document.getElementById('bit16').style.backgroundColor = "yellow";
            document.getElementById('bit15').style.backgroundColor = "yellow";
            document.getElementById('bit14').style.backgroundColor = "yellow";
            document.getElementById('bit13').style.backgroundColor = "orange";
            document.getElementById('bit12').style.backgroundColor = "orange";
            document.getElementById('bit11').style.backgroundColor = "red";
            document.getElementById('bit10').style.backgroundColor = "red";
            break;
        case (b <= 90 && b > 80):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "limegreen";
            document.getElementById('bit17').style.backgroundColor = "limegreen";
            document.getElementById('bit16').style.backgroundColor = "yellow";
            document.getElementById('bit15').style.backgroundColor = "yellow";
            document.getElementById('bit14').style.backgroundColor = "yellow";
            document.getElementById('bit13').style.backgroundColor = "orange";
            document.getElementById('bit12').style.backgroundColor = "orange";
            document.getElementById('bit11').style.backgroundColor = "red";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        case (b <= 80 && b > 70):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "limegreen";
            document.getElementById('bit17').style.backgroundColor = "limegreen";
            document.getElementById('bit16').style.backgroundColor = "yellow";
            document.getElementById('bit15').style.backgroundColor = "yellow";
            document.getElementById('bit14').style.backgroundColor = "yellow";
            document.getElementById('bit13').style.backgroundColor = "orange";
            document.getElementById('bit12').style.backgroundColor = "orange";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        case (b <= 70 && b > 60):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "limegreen";
            document.getElementById('bit17').style.backgroundColor = "limegreen";
            document.getElementById('bit16').style.backgroundColor = "yellow";
            document.getElementById('bit15').style.backgroundColor = "yellow";
            document.getElementById('bit14').style.backgroundColor = "yellow";
            document.getElementById('bit13').style.backgroundColor = "orange";
            document.getElementById('bit12').style.backgroundColor = "LightGray";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        case (b <= 60 && b > 50):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "limegreen";
            document.getElementById('bit17').style.backgroundColor = "limegreen";
            document.getElementById('bit16').style.backgroundColor = "yellow";
            document.getElementById('bit15').style.backgroundColor = "yellow";
            document.getElementById('bit14').style.backgroundColor = "yellow";
            document.getElementById('bit13').style.backgroundColor = "LightGray";
            document.getElementById('bit12').style.backgroundColor = "LightGray";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        case (b <= 50 && b > 40):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "limegreen";
            document.getElementById('bit17').style.backgroundColor = "limegreen";
            document.getElementById('bit16').style.backgroundColor = "yellow";
            document.getElementById('bit15').style.backgroundColor = "yellow";
            document.getElementById('bit14').style.backgroundColor = "LightGray";
            document.getElementById('bit13').style.backgroundColor = "LightGray";
            document.getElementById('bit12').style.backgroundColor = "LightGray";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        case (b <= 40 && b > 30):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "limegreen";
            document.getElementById('bit17').style.backgroundColor = "limegreen";
            document.getElementById('bit16').style.backgroundColor = "yellow";
            document.getElementById('bit15').style.backgroundColor = "LightGray";
            document.getElementById('bit14').style.backgroundColor = "LightGray";
            document.getElementById('bit13').style.backgroundColor = "LightGray";
            document.getElementById('bit12').style.backgroundColor = "LightGray";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        case (b <= 30 && b > 20):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "limegreen";
            document.getElementById('bit17').style.backgroundColor = "limegreen";
            document.getElementById('bit16').style.backgroundColor = "LightGray";
            document.getElementById('bit15').style.backgroundColor = "LightGray";
            document.getElementById('bit14').style.backgroundColor = "LightGray";
            document.getElementById('bit13').style.backgroundColor = "LightGray";
            document.getElementById('bit12').style.backgroundColor = "LightGray";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        case (b <= 20 && b > 10):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "LightGray";
            document.getElementById('bit17').style.backgroundColor = "LightGray";
            document.getElementById('bit16').style.backgroundColor = "LightGray";
            document.getElementById('bit15').style.backgroundColor = "LightGray";
            document.getElementById('bit14').style.backgroundColor = "LightGray";
            document.getElementById('bit13').style.backgroundColor = "LightGray";
            document.getElementById('bit12').style.backgroundColor = "LightGray";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        case (b <= 10 && b >= 0):
            document.getElementById('bit19').style.backgroundColor = "limegreen";
            document.getElementById('bit18').style.backgroundColor = "LightGray";
            document.getElementById('bit17').style.backgroundColor = "LightGray";
            document.getElementById('bit16').style.backgroundColor = "LightGray";
            document.getElementById('bit15').style.backgroundColor = "LightGray";
            document.getElementById('bit14').style.backgroundColor = "LightGray";
            document.getElementById('bit13').style.backgroundColor = "LightGray";
            document.getElementById('bit12').style.backgroundColor = "LightGray";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
        default:
            document.getElementById('bit19').style.backgroundColor = "LightGray";
            document.getElementById('bit18').style.backgroundColor = "LightGray";
            document.getElementById('bit17').style.backgroundColor = "LightGray";
            document.getElementById('bit16').style.backgroundColor = "LightGray";
            document.getElementById('bit15').style.backgroundColor = "LightGray";
            document.getElementById('bit14').style.backgroundColor = "LightGray";
            document.getElementById('bit13').style.backgroundColor = "LightGray";
            document.getElementById('bit12').style.backgroundColor = "LightGray";
            document.getElementById('bit11').style.backgroundColor = "LightGray";
            document.getElementById('bit10').style.backgroundColor = "LightGray";
            break;
    }

    //Wind speed
    const z = (json.wind.speed * 3.6);
    switch (true) {
        case (z > 73):
            document.getElementById('bit29').style.backgroundColor = "limegreen";
            document.getElementById('bit28').style.backgroundColor = "limegreen";
            document.getElementById('bit27').style.backgroundColor = "limegreen";
            document.getElementById('bit26').style.backgroundColor = "yellow";
            document.getElementById('bit25').style.backgroundColor = "yellow";
            document.getElementById('bit24').style.backgroundColor = "yellow";
            document.getElementById('bit23').style.backgroundColor = "orange";
            document.getElementById('bit22').style.backgroundColor = "orange";
            document.getElementById('bit21').style.backgroundColor = "red";
            document.getElementById('bit20').style.backgroundColor = "red";
            break;
        case (z <= 72 && z > 60):
            document.getElementById('bit29').style.backgroundColor = "limegreen";
            document.getElementById('bit28').style.backgroundColor = "limegreen";
            document.getElementById('bit27').style.backgroundColor = "limegreen";
            document.getElementById('bit26').style.backgroundColor = "yellow";
            document.getElementById('bit25').style.backgroundColor = "yellow";
            document.getElementById('bit24').style.backgroundColor = "yellow";
            document.getElementById('bit23').style.backgroundColor = "orange";
            document.getElementById('bit22').style.backgroundColor = "orange";
            document.getElementById('bit21').style.backgroundColor = "red";
            document.getElementById('bit20').style.backgroundColor = "LightGray";
            break;
        case (z <= 60 && z > 49):
            document.getElementById('bit29').style.backgroundColor = "limegreen";
            document.getElementById('bit28').style.backgroundColor = "limegreen";
            document.getElementById('bit27').style.backgroundColor = "limegreen";
            document.getElementById('bit26').style.backgroundColor = "yellow";
            document.getElementById('bit25').style.backgroundColor = "yellow";
            document.getElementById('bit24').style.backgroundColor = "yellow";
            document.getElementById('bit23').style.backgroundColor = "orange";
            document.getElementById('bit22').style.backgroundColor = "orange";
            document.getElementById('bit21').style.backgroundColor = "LightGray";
            document.getElementById('bit20').style.backgroundColor = "LightGray";
            break;
        case (z <= 49 && z > 38):
            document.getElementById('bit29').style.backgroundColor = "limegreen";
            document.getElementById('bit28').style.backgroundColor = "limegreen";
            document.getElementById('bit27').style.backgroundColor = "limegreen";
            document.getElementById('bit26').style.backgroundColor = "yellow";
            document.getElementById('bit25').style.backgroundColor = "yellow";
            document.getElementById('bit24').style.backgroundColor = "yellow";
            document.getElementById('bit23').style.backgroundColor = "orange";
            document.getElementById('bit22').style.backgroundColor = "LightGray";
            document.getElementById('bit21').style.backgroundColor = "LightGray";
            document.getElementById('bit20').style.backgroundColor = "LightGray";
            break;
        case (z <= 38 && z > 28):
            document.getElementById('bit29').style.backgroundColor = "limegreen";
            document.getElementById('bit28').style.backgroundColor = "limegreen";
            document.getElementById('bit27').style.backgroundColor = "limegreen";
            document.getElementById('bit26').style.backgroundColor = "yellow";
            document.getElementById('bit25').style.backgroundColor = "yellow";
            document.getElementById('bit24').style.backgroundColor = "yellow";
            document.getElementById('bit23').style.backgroundColor = "LightGray";
            document.getElementById('bit22').style.backgroundColor = "LightGray";
            document.getElementById('bit21').style.backgroundColor = "LightGray";
            document.getElementById('bit20').style.backgroundColor = "LightGray";
            break;
        case (z <= 28 && z > 19):
            document.getElementById('bit29').style.backgroundColor = "limegreen";
            document.getElementById('bit28').style.backgroundColor = "limegreen";
            document.getElementById('bit27').style.backgroundColor = "limegreen";
            document.getElementById('bit26').style.backgroundColor = "yellow";
            document.getElementById('bit25').style.backgroundColor = "yellow";
            document.getElementById('bit24').style.backgroundColor = "LightGray";
            document.getElementById('bit23').style.backgroundColor = "LightGray";
            document.getElementById('bit22').style.backgroundColor = "LightGray";
            document.getElementById('bit21').style.backgroundColor = "LightGray";
            document.getElementById('bit20').style.backgroundColor = "LightGray";
            break;
        case (z <= 19 && z > 11):
            document.getElementById('bit29').style.backgroundColor = "limegreen";
            document.getElementById('bit28').style.backgroundColor = "limegreen";
            document.getElementById('bit27').style.backgroundColor = "limegreen";
            document.getElementById('bit26').style.backgroundColor = "yellow";
            document.getElementById('bit25').style.backgroundColor = "LightGray";
            document.getElementById('bit24').style.backgroundColor = "LightGray";
            document.getElementById('bit23').style.backgroundColor = "LightGray";
            document.getElementById('bit22').style.backgroundColor = "LightGray";
            document.getElementById('bit21').style.backgroundColor = "LightGray";
            document.getElementById('bit20').style.backgroundColor = "LightGray";
            break;
        case (z <= 11):
            document.getElementById('bit29').style.backgroundColor = "limegreen";
            document.getElementById('bit28').style.backgroundColor = "limegreen";
            document.getElementById('bit27').style.backgroundColor = "limegreen";
            document.getElementById('bit26').style.backgroundColor = "LightGray";
            document.getElementById('bit25').style.backgroundColor = "LightGray";
            document.getElementById('bit24').style.backgroundColor = "LightGray";
            document.getElementById('bit23').style.backgroundColor = "LightGray";
            document.getElementById('bit22').style.backgroundColor = "LightGray";
            document.getElementById('bit21').style.backgroundColor = "LightGray";
            document.getElementById('bit20').style.backgroundColor = "LightGray";
            break;
        default:
            document.getElementById('bit29').style.backgroundColor = "LightGray";
            document.getElementById('bit28').style.backgroundColor = "LightGray";
            document.getElementById('bit27').style.backgroundColor = "LightGray";
            document.getElementById('bit26').style.backgroundColor = "LightGray";
            document.getElementById('bit25').style.backgroundColor = "LightGray";
            document.getElementById('bit24').style.backgroundColor = "LightGray";
            document.getElementById('bit23').style.backgroundColor = "LightGray";
            document.getElementById('bit22').style.backgroundColor = "LightGray";
            document.getElementById('bit21').style.backgroundColor = "LightGray";
            document.getElementById('bit20').style.backgroundColor = "LightGray";
            break;
    }
}).catch((err) => {
    console.log(err.message);
});
}

weatherData();

//onclick method for cities on the panel
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul = citi;
ul.onclick = function(event) {
    var target = getEventTarget(event);
    cityInput = target.innerHTML;

    weatherData();
};

//Submit event for search form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (searchBar.value.length == 0) {
        alert('Please enter a city');
    } else {
        cityInput = searchBar.value;
        searchBar.value = '';

        weatherData();
    }
});