function showFruitData() {
const firstName = document.getElementById('first-name').value
const lastName = document.getElementById('last-name').value
const email = document.getElementById('email').value
const phoneNumber = document.getElementById('phone-number').value
const fruit1 = document.getElementById('fruit-1').value
const fruit2 = document.getElementById('fruit-2').value
const fruit3 = document.getElementById('fruit-3').value
const specialInstructions = document.getElementById('special-instructions').value

const fruits = [fruit1, fruit2, fruit3]
let totalNutrition = {
  carbohydrates: 0,
  protein: 0,
  fat: 0,
  calories: 0,
  sugar: 0
}

fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < fruits.length; i++) {
      const fruit = data.find(f => f.name === fruits[i])
      totalNutrition.carbohydrates += fruit.nutritions.carbohydrates
      totalNutrition.protein += fruit.nutritions.protein
      totalNutrition.fat += fruit.nutritions.fat
      totalNutrition.calories += fruit.nutritions.calories
      totalNutrition.sugar += fruit.nutritions.sugar
    }

    const output = `
      <h2>Order Submitted!</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Fruit Selection:</strong> ${fruit1}, ${fruit2}, ${fruit3}</p>
      <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
      <p><strong>Order Date:</strong> ${new Date().toLocaleString()}</p>
      <h3>Total Nutrition</h3>
      <p><strong>Carbohydrates:</strong> ${totalNutrition.carbohydrates.toFixed(2)} g</p>
      <p><strong>Protein:</strong> ${totalNutrition.protein.toFixed(2)} g</p>
      <p><strong>Fat:</strong> ${totalNutrition.fat.toFixed(2)} g</p>
      <p><strong>Calories:</strong> ${totalNutrition.calories.toFixed(2)} kcal</p>
      <p><strong>Sugar:</strong> ${totalNutrition.sugar.toFixed(2)} g</p>
    `

    const outputArea = document.getElementById('output-area')
    outputArea.innerHTML = output
    outputArea.style.border = '5px solid var(--secondary-accent)'

    // increment count in local storage
    let drinkOrderCount = parseInt(localStorage.getItem('drinkOrderCount')) || 0;
    drinkOrderCount++;
    localStorage.setItem('drinkOrderCount', drinkOrderCount);
  })
  .catch(error => console.log(error))

}

const submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', showFruitData)