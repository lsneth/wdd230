const temp=document.getElementById('temp').textContent
const windSpeed=document.getElementById('windSpeed').textContent
const windChill=document.getElementById('windChill')

function getWindChill(temp, windSpeed){
    return 35.74 + (.6215*temp)-(35.75*(windSpeed**.16))+(.4275*temp*(windSpeed**.16))
}

(temp<=50 && windSpeed>3) ? (windChill.textContent=`${(getWindChill(temp, windSpeed)).toFixed()}°`):(windChill.textContent='N/A')

// const API_KEY='11b458d7fbab78d318815a683f938f58'