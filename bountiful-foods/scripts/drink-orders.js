let drinkOrderCount = parseInt(localStorage.getItem('drinkOrderCount')) || 0;

document.getElementById('drink-order-count').textContent = `(You have previously made ${drinkOrderCount} custom drink order${drinkOrderCount === 1 ? '':'s'}.)`;
