
let box = document.getElementById('box1')

const dataCall = async () => {

  // Karachi coordinates
  let response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=24.8607&longitude=67.0011&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=Asia%2FKarachi'
  )

  let Mydata = await response.json()

  console.log(Mydata)

  let weather = Mydata.current

  box.innerHTML += `
    <div class='card'>

      <h1>Karachi Weather</h1>

      <h2>Temperature: ${weather.temperature_2m} °C</h2>

      <h2>Feels Like: ${weather.apparent_temperature} °C</h2>

      <h2>Humidity: ${weather.relative_humidity_2m} %</h2>

      <h2>Wind Speed: ${weather.wind_speed_10m} km/h</h2>

      <h2>Precipitation: ${weather.precipitation} mm</h2>

      <h2>Weather Code: ${weather.weather_code}</h2>

      <h2>Is Day: ${weather.is_day ? 'Yes' : 'No'}</h2>

    </div>
  `
}

dataCall()




