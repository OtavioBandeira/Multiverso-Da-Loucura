export function nameToCharacterSelect(character) {
  const characterName = document.getElementById('selectedName')
  const charId = character.dataset.name
  characterName.innerText = charId
}

export function imgToCharacterSelect(character) {
  const characterSelected = document.querySelector('.selectedCharacter')
  const characterId = character.getAttribute('id')
  characterSelected.src = `/src/assets/imagensPersonagens/${characterId}.png`
}

export function selectToCharacter(character) {
  const charSelected = document.querySelector('.selection')
  charSelected.classList.remove('selection')
  character.classList.add('selection')
}
