const url=`https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=${API_KEY}`
const API_KEY='11b458d7fbab78d318815a683f938f58'

const temp=document.getElementById('temp').textContent
const currentCondition=document.getElementById('currentCondition').textContent
const windSpeed=document.getElementById('windSpeed').textContent
const windChill=document.getElementById('windChill').textContent

function getWindChill(temp, windSpeed){
    return 35.74 + (.6215*temp)-(35.75*(windSpeed**.16))+(.4275*temp*(windSpeed**.16))
}

(temp<=50 && windSpeed>3) ? (windChill.textContent=`${(getWindChill(temp, windSpeed)).toFixed()}°`):(windChill.textContent='N/A')


const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')

async function apiFetch() {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        displayResults(data)
      } else {
          throw Error(await response.text())
      }
    } catch (error) {
        console.log(error)
    }
  }
  
apiFetch()

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
    const desc = weatherData.weather[0].description
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', desc)
    captionDesc.textContent = desc
  }