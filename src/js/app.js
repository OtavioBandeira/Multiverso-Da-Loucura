import { database } from '../database/database.js'
import { addImageToCarousel } from './addImageCarousel.js'
import { createCard } from './createCard.js'
import { menuLinks,carousel } from './scripts.js'

database.forEach(data => {
  const { characterName,subtitles,characterBanner } = data

  const characterData = {
    characterName,
    subtitles,
    characterBanner
  }

  addImageToCarousel(characterData)
  createCard(characterData)
})

menuLinks()
carousel()