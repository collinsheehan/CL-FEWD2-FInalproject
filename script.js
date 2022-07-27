//calling weather api
//and gathering all information to display
let weather = {
    "apiKey": "66ebd4c5209521c05c01f39417dc65ec",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
//search button functionality to execute function
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});
//enter button functionality to allow a user to search by hitting the enter key
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    } 
});
//setting initial value to Louisville
weather.fetchWeather("louisville");


//celius to fahrenheit converter
document.querySelector(".temp-convert button").addEventListener("click", function (celsius) {
    var celsius = document.querySelector(".celsius").value;
    var fahrenheit = celsius * (9 / 5) + 32;
    document.querySelector(".fahrenheit-temp").innerText = fahrenheit.toFixed(2) + "°F";
});
//kmh to mph converter
document.querySelector(".speed-convert button").addEventListener("click", function (kmh) {
    var kmh = document.querySelector(".kmh").value;
    var mph = kmh / 1.609344;
    document.querySelector(".mph").innerText = mph.toFixed(2) + "MPH";
});

//temperature regex
document.querySelector(".temp-convert button").addEventListener("click", function (number) {
    var number = document.querySelector(".celsius").value;
    var regexNumbers = /^\s*-?\d+(\.\d{1,2})?\s*$/;
    if(number.match(regexNumbers)) {
        return true;
    } else {
        alert('Please type a number up to two decimal places');
        return false;
    }
});

//speed regex
document.querySelector(".speed-convert button").addEventListener("click", function (number) {
    var number = document.querySelector(".kmh").value;
    var regexNumbers = /^\s*-?\d+(\.\d{1,2})?\s*$/;
    if(number.match(regexNumbers)) {
        return true;
    } else {
        alert('Please type a number up to two decimal places');
        return false;
    }
});