// Reference the form
const searchByCityEl = document.getElementById("search-by-city");
const searchFormEl = document.getElementById("search-form");
// reference search-term id
const searchTermEl = document.getElementById("search-term");

const appId = "&appid=18b93bcb5dc1cfcbc507982a4bf6e1bd";

// Get current and future weather conditions using One Call API
const getWeatherConditions = function(cityName) {
    // Variable to get city's weather information
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}${appId}`;

    // make a request using fetch
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            //console.log(data);

            // Variable to get lat and lon of city
            const oneCallApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,hourly${appId}`;
            // console.log(oneCallApiUrl);

            fetch(oneCallApiUrl).then(function(oneCallData) {
                // oneCallData similar to response, data2 similar to data
                oneCallData.json().then(function(data2) {
                    console.log(data2);

                    // create HTML element where city name will be displayed
                    const searchTerm = document.createElement("h2");

                    // update header with search term input
                    searchTermEl.innerText = cityName;

                    searchTermEl.appendChild(searchTerm);

                    // Display Current Conditions
                    // display temp
                    const tempEl = document.getElementById("temp");
                    const temp = document.createElement("p");
                    tempEl.innerText = data2.current.temp;
                    tempEl.appendChild(temp);

                    // display wind
                    const windEl = document.getElementById("wind");
                    const wind = document.createElement("p");
                    windEl.innerText = data2.current.wind_speed;
                    windEl.appendChild(wind);

                    // display humidity
                    const humidityEl = document.getElementById("humidity");
                    const humidity = document.createElement("p");
                    humidityEl.innerText = data2.current.humidity;
                    humidityEl.appendChild(humidity);

                    // display UV index
                    const uvIndexEl = document.getElementById("uv-index");
                    const uvIndex = document.createElement("p");
                    uvIndexEl.innerText = data2.current.uvi;
                    uvIndexEl.appendChild(uvIndex);
                    // End Current Conditions

                    // Display 5-Day Forecast
                    // display tomorrow
                        // display temp
                        const tempTomorrowEl = document.getElementById("temp-tomorrow");
                        const tempTomorrow = document.createElement("p");
                        tempTomorrowEl.innerText = data2.daily[0].temp;
                        tempTomorrowEl.appendChild(tempTomorrow);

                        // display wind
                        // const windTwoDaysEl = document.getElementById("wind-two-days");
                        // const windTwoDays = document.createElement("p");
                        // windTwoDaysEl.innerText = data2.current.wind_speed;
                        // windTwoDaysEl.appendChild(windTwoDays);

                        // display humidity
                        // const humidityEl = document.getElementById("humidity");
                        // const humidity = document.createElement("p");
                        // humidityEl.innerText = data2.current.humidity;
                        // humidityEl.appendChild(humidity);

                        // // display UV index
                        // const uvIndexEl = document.getElementById("uv-index");
                        // const uvIndex = document.createElement("p");
                        // uvIndexEl.innerText = data2.current.uvi;
                        // uvIndexEl.appendChild(uvIndex);
                    // End 5-Day Forecast
                });
            }); 
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
//getWeatherConditions();

