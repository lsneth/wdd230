async function getFruitData() {
    try {
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        if (response.ok) {
        const data = await response.json()
        fruitNames = data.map(fruit => fruit.name)
        return fruitNames
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

const fruitSelector1 = document.getElementById('fruit-1')
const fruitSelector2 = document.getElementById('fruit-2')
const fruitSelector3 = document.getElementById('fruit-3')

const fruitSelectors = [fruitSelector1, fruitSelector2, fruitSelector3]

getFruitData().then(data => data.map(fruitName => {
    fruitSelectors.map(fruitSelector => {
        const newFruitOption = document.createElement('option')
        newFruitOption.setAttribute('value', fruitName)
        newFruitOption.textContent=fruitName
        fruitSelector.appendChild(newFruitOption)
    })
}))