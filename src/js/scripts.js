const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    navLinks.classList.add('inactive');

    setTimeout(() => {
      navLinks.classList.remove('inactive');
      navLinks.style.visibility = 'hidden';
    }, 500);
  } else {
    navLinks.style.visibility = 'visible';
    navLinks.classList.add('active');
  }
});

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