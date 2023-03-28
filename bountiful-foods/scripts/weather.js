const API_KEY='11b458d7fbab78d318815a683f938f58'
const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?zip=92008&units=imperial&appid=${API_KEY}&cnt=3`
const forecastUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=33.1412&lon=117.3205&units=imperial&appid=${API_KEY}`

async function getWeather() {
  try {
    const response = await fetch(weatherUrl)
    if (response.ok) {
      const data = await response.json()
      return {
        temperature:data.main.temp.toFixed(),
        low:data.main.temp_min.toFixed(),
        high:data.main.temp_max.toFixed(),
        description:data.weather[0].description,
        humidity:data.main.humidity,
        icon:data.weather[0].icon
      }
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
      const forecastOne = data.list.slice(0,8)
      const forecastTwo = data.list.slice(8,16)
      const forecastThree = data.list.slice(16,24)
    return [
        {
          dayName:getDayOfWeek(forecastOne[0].dt_txt.slice(0,10)),
          ...getHighAndLow(forecastOne)
        },
        {
          dayName:getDayOfWeek(forecastTwo[0].dt_txt.slice(0,10)),
          ...getHighAndLow(forecastTwo)
        },
        {
          dayName:getDayOfWeek(forecastThree[0].dt_txt.slice(0,10)),
          ...getHighAndLow(forecastThree)
        }
    ]
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
  const highs = forecastData.map(data => data.main.temp_max.toFixed())
  const lows = forecastData.map(data => data.main.temp_min.toFixed())
  const high = Math.max(...highs)
  const low = Math.min(...lows)
  return {high, low}
}
  
function displayWeather(weatherData) {
  const currentTemperature = document.getElementById('current-temperature')
  currentTemperature.textContent = `${weatherData.temperature}°`

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.icon}.png`
  const icon = document.getElementById('current-icon')
  icon.setAttribute('src', iconsrc)

  const currentDescription = document.getElementById('current-description')
  currentDescription.textContent = weatherData.description
  
  const currentHumidity = document.getElementById('current-humidity')
  currentHumidity.textContent = `${weatherData.humidity}%`

  const highLow = document.getElementById('high-low')
  highLow.textContent = `${weatherData.high}° / ${weatherData.low}° `
}

function displayForecast(forecastData) {
  const weatherCards = document.getElementById('weather-cards')

  forecastData.map((data)=>{
    const weatherCard = document.createElement('div')
    weatherCard.setAttribute('class', 'weather-card')

    const day = document.createElement('h3')
    day.textContent=data.dayName

    const temp = document.createElement('p')
    temp.setAttribute('class', 'temp')
    temp.textContent = `${data.high}° / ${data.low}°`

    weatherCard.appendChild(day)
    weatherCard.appendChild(temp)

    weatherCards.append(weatherCard)
  })
}

getWeather().then(res => displayWeather(res))
getForecast().then(res => displayForecast(res))