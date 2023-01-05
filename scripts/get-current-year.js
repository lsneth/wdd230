function getCurrentYear() {
    const date = new Date()
    document.querySelector('#currentYear').textContent = date.getFullYear()
}
window.addEventListener('load', getCurrentYear)