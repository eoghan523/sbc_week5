const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";

document.getElementById("getWeather").addEventListener("click", function () {
  const city = document.getElementById("city").value;

  if (city) {
    // First, get the latitude and longitude for the city
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          //TODO: get the latitude and longitude for the city
          //TODO: Call getWeather API with latitude and longitude
        } else {
          displayError("City not found");
        }
      })
      .catch((error) => displayError("Error fetching data."));
  } else {
    displayError("Please enter a city name.");
  }
});

// Function to get daily weather based on latitude and longitude
function getWeather(lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      //TODO: get the main, weather, and name from the data
      // const name = ???
      // const temperature = ???
      // const description = ???
      displayWeather(name, temperature, description);
    })
    .catch((error) => displayError("Error fetching weather data."));
}

// Function to display the weather information
function displayWeather(city, temperature, description) {
  const weatherResult = document.getElementById("weatherResult");

  //TODO: display the city, temperature, and description in the weatherResult element
}

// Function to display error messages
function displayError(message) {
  const weatherResult = document.getElementById("weatherResult");
  weatherResult.innerHTML = `<p>${message}</p>`;
}
