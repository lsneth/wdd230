const currentDate = new Date()
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const dayName = days[currentDate.getUTCDay()]
const monthName = months[currentDate.getUTCMonth()]
const day = currentDate.getUTCDate()
const year = currentDate.getUTCFullYear()

const dateString = `${dayName}, ${day} ${monthName} ${year}`
document.querySelector('#date').textContent=dateString

const banner=document.querySelector('#banner'); // for some reason it requires a semi colon here

(dayName==='Monday' || dayName==='Tuesday') ? banner.textContent='🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.' : banner.style.display = 'none'