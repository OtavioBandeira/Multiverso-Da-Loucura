import { imgToCharacterSelect, nameToCharacterSelect, selectToCharacter, actorToSelect, descriptionToCharacterSelect } from "./charactersSelected.js"

const characters = document.querySelectorAll('.character')

characters.forEach((character)=> {
  character.addEventListener('click', ()=> {
    selectToCharacter(character)
    imgToCharacterSelect(character)
    nameToCharacterSelect(character)
    actorToSelect(character)
    descriptionToCharacterSelect(character)
  })
})

