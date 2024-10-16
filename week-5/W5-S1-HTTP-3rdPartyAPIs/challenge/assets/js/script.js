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
          const lat = data[0].lat;
          const lon = data[0].lon;
          const cityName = data[0].name;

          // Call getWeather API with latitude and longitude
          getWeather(lat, lon, cityName);
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
function getWeather(lat, lon, cityName) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract the relevant weather data
      const temperature = data.main.temp; // Temperature in Celsius
      const description = data.weather[0].description; // Weather description

      // Display weather information
      displayWeather(cityName, temperature, description);
    })
    .catch((error) => displayError("Error fetching weather data."));
}

// Function to display the weather information
function displayWeather(city, temperature, description) {
  const weatherResult = document.getElementById("weatherResult");

  // Display city, temperature, and weather description
  weatherResult.innerHTML = `
    <h2>Weather in ${city}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Condition: ${description}</p>
  `;
}

// Function to display error messages
function displayError(message) {
  const weatherResult = document.getElementById("weatherResult");
  weatherResult.innerHTML = `<p>${message}</p>`;
}