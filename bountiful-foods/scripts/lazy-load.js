const images = document.querySelectorAll('img[data-src]')

const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target
      const src = img.getAttribute('data-src')
      img.setAttribute('src', src)
      img.removeAttribute('data-src')
      imgObserver.unobserve(img)
    }
  })
})

images.forEach(image => {
  imgObserver.observe(image)
})
