document.addEventListener('DOMContentLoaded', function() {
    // Fetch weather data
    fetchWeatherData();
});

function fetchWeatherData() {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '669884db281msha5557b711c9f192p15df10jsn16d7b54184af';
    const apiUrl = `https://weather-api99.p.rapidapi.com/weather`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${weatherDescription}</p>
    `;
}
