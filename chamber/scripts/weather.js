const API_KEY='11b458d7fbab78d318815a683f938f58'
const url=`https://api.openweathermap.org/data/2.5/weather?q=Rexburg&units=imperial&appid=${API_KEY}`

const temp=document.getElementById('temp')
const currentCondition=document.getElementById('currentCondition')
const windSpeed=document.getElementById('windSpeed')
const windChill=document.getElementById('windChill')
const weatherIcon = document.getElementById('weatherIcon')

function getWindChill(temp, windSpeed){
    return 35.74 + (.6215*temp)-(35.75*(windSpeed**.16))+(.4275*temp*(windSpeed**.16))
}

(temp<=50 && windSpeed>3) ? (windChill.textContent=`${(getWindChill(temp, windSpeed)).toFixed()}°`):(windChill.textContent='N/A')


// const currentTemp = document.querySelector('#current-temp')
// const captionDesc = document.querySelector('figcaption')

async function apiFetch() {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      displayResults(data)
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
  
apiFetch()