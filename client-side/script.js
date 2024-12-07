const fetchWeatherData = async function () {
    const weatherInfoElement = document.getElementById('weather-info');
    const city = document.getElementById('city').value
    const response = await fetch('http://127.0.0.1:3000/api/v1/weatherData/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({city})
    })
    if (response.ok){
    const weatherData = await response.json()
    document.getElementById('place').textContent = weatherData.address
    document.getElementById('pressure').textContent = weatherData.currentConditions.pressure
    document.getElementById('temperature').textContent = weatherData.currentConditions.temp
    document.getElementById('conditions').textContent = weatherData.currentConditions.conditions
    document.getElementById('wind-speed').textContent = weatherData.currentConditions.windspeed
    weatherInfoElement.style.display = 'block';
    }
    else {
        alert('Enter valid city or city not found')
    }
}