{/* <div class="spotlight spotlight2">
  <h1 id="spotlight2Title">Thankful Transport</h1>
  <img id="spotlight2Image">
  <hr>
  <p id="spotlight2Site"></p>
  <p id="spotlight2Phone"></p>
</div> */}

const src = './data/data.json'

async function getBusinessData() {
    const response = await fetch(src)
    const data = await response.json()
    displayBusinessCards(getRandomBusinesses(data))
  }
  
getBusinessData()

function getRandomBusinesses(data) {
  let selectedBusinesses = [];
  let businessesCopy = [...data.businesses]; // create a copy of the array to avoid modifying the original

  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * businessesCopy.length);
    selectedBusinesses.push(businessesCopy[randomIndex]);
    businessesCopy.splice(randomIndex, 1); // remove the selected business from the array
  }

  return selectedBusinesses;
}


const displayBusinessCards = (businesses) => {  
  let spotlight1Title = document.getElementById('spotlight1Title')
  let spotlight1Image = document.getElementById('spotlight1Image')
  let spotlight1Site = document.getElementById('spotlight1Site')
  let spotlight1Phone = document.getElementById('spotlight1Phone')

  let spotlight2Title = document.getElementById('spotlight2Title')
  let spotlight2Image = document.getElementById('spotlight2Image')
  let spotlight2Site = document.getElementById('spotlight2Site')
  let spotlight2Phone = document.getElementById('spotlight2Phone')

  let spotlight3Title = document.getElementById('spotlight3Title')
  let spotlight3Image = document.getElementById('spotlight3Image')
  let spotlight3Site = document.getElementById('spotlight3Site')
  let spotlight3Phone = document.getElementById('spotlight3Phone')


  spotlight1Title.textContent=businesses[0].name
  spotlight2Title.textContent=businesses[1].name
  spotlight3Title.textContent=businesses[2].name
  
  spotlight1Image.setAttribute('src', businesses[0].image)
  spotlight1Image.setAttribute('alt', `${businesses[0].name} logo`)
  spotlight2Image.setAttribute('src', businesses[1].image)
  spotlight2Image.setAttribute('alt', `${businesses[1].name} logo`)
  spotlight3Image.setAttribute('src', businesses[2].image)
  spotlight3Image.setAttribute('alt', `${businesses[2].name} logo`)

  spotlight1Site.setAttribute('href', businesses[0].website)
  spotlight1Site.textContent=businesses[0].website
  spotlight2Site.setAttribute('href', businesses[1].website)
  spotlight2Site.textContent=businesses[1].website
  spotlight3Site.setAttribute('href', businesses[2].website)
  spotlight3Site.textContent=businesses[2].website

  spotlight1Phone.textContent=businesses[0].phone
  spotlight2Phone.textContent=businesses[1].phone
  spotlight3Phone.textContent=businesses[2].phone
}