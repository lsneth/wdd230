const now = new Date().getTime()

const lastVisited=document.querySelector("#lastVisited")

if (!localStorage.getItem('lastVisit')) {
  localStorage.setItem('lastVisit', now)
  lastVisited.textContent='Welcome to the discover page!'
} else {
  const lastVisit = localStorage.getItem('lastVisit')

  const timeDiff = now - lastVisit

  const daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24))

  lastVisited.textContent=`Welcome back! It's been ${daysDiff} days since your last visit.`

  localStorage.setItem('lastVisit', now)
}