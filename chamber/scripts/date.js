const currentDate = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dayName = days[currentDate.getUTCDay()];
const monthName = months[currentDate.getUTCMonth()];
const day = currentDate.getUTCDate();
const year = currentDate.getUTCFullYear();

const dateString = `${dayName}, ${day} ${monthName} ${year}`;
document.querySelector('.date').textContent=dateString;