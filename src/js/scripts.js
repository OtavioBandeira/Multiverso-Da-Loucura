document.getElementById('menu-icon').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links')
  navLinks.classList.toggle('active')
})

document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.getElementById('carousel-container')
  const slides = document.querySelectorAll('.carousel-slide')
  const prevButton = document.getElementById('prev')
  const nextButton = document.getElementById('next')
  let index = 0

  function showSlide(i) {
    index += i
    if (index < 0) {
      index = slides.length - 1
    }else if (index >= slides.length) {
      index = 0
    }
    carouselContainer.style.transform = `translatex(${-index * 100}%)`
  }

  prevButton.addEventListener('click', () => showSlide(-1))
  nextButton.addEventListener('click', () => showSlide(1))
})