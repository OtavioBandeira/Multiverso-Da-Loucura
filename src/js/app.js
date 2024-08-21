import { database } from '../database/database.js'
import { createCard } from './createCard.js'
import { menuLinks,carousel } from './scripts.js'

database.forEach(data => {
  const { characterName,subtitles,characterBanner } = data

  const characterData = {
    characterName,
    subtitles,
    characterBanner
  }

  createCard(characterData)
})

menuLinks()
carousel()