function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'b20a62e6a832c76decd7b6281a309ead';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp};</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})
.catch(error => console.error('Error fetching weather data:', error)); // Log any errors
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );