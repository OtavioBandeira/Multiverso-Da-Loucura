import { actoresDescription } from "./actoresDescription.js"
import { imgToCharacterSelect, nameToCharacterSelect, selectToCharacter } from "./charactersSelected.js"

const characters = document.querySelectorAll('.character')

characters.forEach((character)=> {
  character.addEventListener('click', ()=> {
  selectToCharacter(character)
  imgToCharacterSelect(character)
  nameToCharacterSelect(character)
  })
})

console.table(actoresDescription)