export const createCard = (data) => {
  const sectionCards = document.querySelector('.cards')

  const ancoraCard = document.createElement('a')
  ancoraCard.href = `../pages/personagens/${data.characterName}/`

  const divCard = document.createElement('div')
  divCard.classList.add('card')

  const h1Card = document.createElement('h1')
  h1Card.classList.add('mainName')
  h1Card.textContent = data.characterName.replace('-', ' ')

  const imgCard = document.createElement('img')
  imgCard.classList.add('imgCard')
  imgCard.src = data.characterBanner
  imgCard.alt = `personagem ${data.characterName.replace('-', ' ')}`

  const h2Card = document.createElement('h2')
  h2Card.classList.add('titleName')
  h2Card.textContent = data.subtitles

  divCard.append(
    h1Card,
    imgCard,
    h2Card
  )

  ancoraCard.appendChild(
    divCard
  )

  sectionCards.appendChild(
    ancoraCard
  )
}