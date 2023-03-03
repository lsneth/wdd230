const src = './data/data.json'

async function getBusinessData() {
    const response = await fetch(src)
    const data = await response.json()
    displayBusinessCards(data.businesses)
    displayBusinessList(data.businesses)
  }
  
getBusinessData()

const displayBusinessCards = (businesses) => {
    const cards = document.querySelector('#businessCards')
  
    businesses.forEach((business) => {
      let card = document.createElement('section')
      card.setAttribute('class', 'card')
      let logo = document.createElement('img')
      let name = document.createElement('h2')
      let address = document.createElement('p')
      let phone = document.createElement('p')
      let website = document.createElement('a')
      
      logo.setAttribute('src', business.image)
      logo.setAttribute('alt', `${business.name} logo`)
      logo.setAttribute('loading', 'lazy')
      logo.setAttribute('width', '98')
      logo.setAttribute('height', '98')

      name.textContent = business.name
      address.textContent = business.address
      phone.textContent = business.phone
      
      website.setAttribute('href', business.website)
      website.textContent = business.website
  
      card.appendChild(logo)
      card.appendChild(name)
      card.appendChild(address)
      card.appendChild(phone)
      card.appendChild(website)
  
      cards.appendChild(card)
    })
  }

const displayBusinessList = (businesses) => {
    const list = document.querySelector('#businessList')
  
    businesses.forEach((business) => {
      let listItem = document.createElement('section')
      listItem.setAttribute('class', 'listItem')
      let businessInfo = document.createElement('div')
      businessInfo.setAttribute('class', 'businessInfo')
      let logo = document.createElement('img')
      let name = document.createElement('h2')
      let address = document.createElement('p')
      let phone = document.createElement('p')
      let website = document.createElement('a')
      
      logo.setAttribute('src', business.image)
      logo.setAttribute('alt', `${business.name} logo`)
      logo.setAttribute('loading', 'lazy')
      logo.setAttribute('width', '98')
      logo.setAttribute('height', '98')

      name.textContent = business.name
      address.textContent = business.address
      phone.textContent = business.phone
      
      website.setAttribute('href', business.website)
      website.textContent = business.website
  
      businessInfo.appendChild(name)
      businessInfo.appendChild(address)
      businessInfo.appendChild(phone)
      businessInfo.appendChild(website)
      
      listItem.appendChild(logo)
      listItem.appendChild(businessInfo)

      list.appendChild(listItem)
    })
  }