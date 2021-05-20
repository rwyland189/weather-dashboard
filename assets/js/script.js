// Reference the form
const searchByCityEl = document.querySelector("#search-by-city");
const searchFormEl = document.querySelector("#search-form");

// Get current and future weather conditions using One Call API
const getWeatherConditions = function() {
    // console.log shows GET request as 401 (unauthorized)
    // use template literals in this fetch request? lat, lon, part, api key?
    const apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
    console.log(apiUrl);

    // make a request using fetch
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};



getWeatherConditions();