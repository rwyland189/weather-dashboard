// Reference the form
const searchByCityEl = document.getElementById("search-by-city");
const searchFormEl = document.getElementById("search-form");

const appId = "&appid=18b93bcb5dc1cfcbc507982a4bf6e1bd";

// Get current and future weather conditions using One Call API
const getWeatherConditions = function(cityName) {
    // Variable to get city's weather information
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}${appId}`;

    // make a request using fetch
    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });

    

    // Variable to get lat and lon of city
    const oneCallApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly${appId}`;
    console.log(oneCallApiUrl);

    fetch(oneCallApiUrl).then(function(oneCallData) {
        oneCallData.json().then(function(data2) {
            console.log(data2);
        });
    });
};



// Function to perform upon form submission
const formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(searchByCityEl.value);
    getWeatherConditions(searchByCityEl.value);
    //console.log(event);
};

searchFormEl.addEventListener("submit", formSubmitHandler);

//left off on 6.2.4
// getWeatherConditions();