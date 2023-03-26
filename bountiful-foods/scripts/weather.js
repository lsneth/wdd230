const API_KEY='11b458d7fbab78d318815a683f938f58'
const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?zip=92008&units=imperial&appid=${API_KEY}&cnt=3`
const forecastUrl=`api.openweathermap.org/data/2.5/forecast?lat=33.14&lon=117.32&appid=${API_KEY}`

async function getWeather() {
  try {
    const response = await fetch(weatherUrl)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      return {temperature:data.main.temp, description:data.weather[0].description, humidity:data.main.humidity }
    } else {
        throw Error(await response.text())
    }
  } catch (error) {
      console.log(error)
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      return {}
    } else {
        throw Error(await response.text())
    }
  } catch (error) {
      console.log(error)
  }
}
  
  
function displayResults(weatherData) {
  temp.textContent = weatherData.main.temp.toFixed(0)
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
  const desc = weatherData.weather[0].description
  weatherIcon.setAttribute('src', iconsrc)
  weatherIcon.setAttribute('alt', desc)
  currentCondition.textContent = weatherData.weather[0].description
}
  
getForecast()