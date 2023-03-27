const API_KEY='11b458d7fbab78d318815a683f938f58'
const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?zip=92008&units=imperial&appid=${API_KEY}&cnt=3`
const forecastUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=33.1412&lon=117.3205&units=imperial&appid=${API_KEY}`

async function getWeather() {
  try {
    const response = await fetch(weatherUrl)
    if (response.ok) {
      const data = await response.json()
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
      const forecastOne = data.list.slice(0,8)
      const forecastTwo = data.list.slice(8,16)
      const forecastThree = data.list.slice(16,24)
    return {
        dayOne:{
          dayName:getDayOfWeek(forecastOne[0].dt_txt.slice(0,10)),
          ...getHighAndLow(forecastOne)
        },
        dayTwo:{
          dayName:getDayOfWeek(forecastTwo[0].dt_txt.slice(0,10)),
          ...getHighAndLow(forecastTwo)
        },
        dayThree:{
          dayName:getDayOfWeek(forecastThree[0].dt_txt.slice(0,10)),
          ...getHighAndLow(forecastThree)
        }
      }
    } else {
        throw Error(await response.text())
    }
  } catch (error) {
      console.log(error)
  }
}

function getDayOfWeek(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[new Date(date).getDay()+1];
}

function getHighAndLow(forecastData) {
  const highs = forecastData.map(data => data.main.temp_max)
  const lows = forecastData.map(data => data.main.temp_min)
  const high = Math.max(...highs)
  const low = Math.min(...lows)
  return {high, low}
}
  
function displayResults(weatherData) {
  const currentTemp = document.getElementById('current-temp')
  currentTemp.textContent = `${weatherData.temperature}°`
  temp.textContent = weatherData.main.temp.toFixed(0)
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
  const desc = weatherData.weather[0].description
  weatherIcon.setAttribute('src', iconsrc)
  weatherIcon.setAttribute('alt', desc)
  currentCondition.textContent = weatherData.weather[0].description
}

getWeather().then(res => displayResults(res))