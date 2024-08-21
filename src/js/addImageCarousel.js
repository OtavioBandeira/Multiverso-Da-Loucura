export const addImageToCarousel = (data) => {
  const carouselContainer = document.getElementById('carousel-container')

  const carouselSlide = document.createElement('div')
  carouselSlide.classList.add('carousel-slide')

  const img = document.createElement('img')
  img.src = data.characterBanner
  img.alt = `personagem ${data.characterName.replace('-', ' ')}`

  carouselSlide.append(
    img
  )
  carouselContainer.appendChild(
    carouselSlide
  )
}