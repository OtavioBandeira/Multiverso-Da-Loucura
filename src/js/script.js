const characters = document.querySelectorAll('.character')

characters.forEach((character)=> {
  character.addEventListener('click', ()=> {
    
  selectToCharacter(character)

  imgToCharacterSelect(character)

  nameToCharacterSelect(character)
  })
})

function nameToCharacterSelect(character) {
  const characterName = document.getElementById('selectedName')
  const charId = character.dataset.name
  characterName.innerText = charId
}

function imgToCharacterSelect(character) {
  const characterSelected = document.querySelector('.selectedCharacter')
  const characterId = character.getAttribute('id')
  characterSelected.src = `../imagensPersonagens/${characterId}.png`
}

function selectToCharacter(character) {
  const charSelected = document.querySelector('.selection')
  charSelected.classList.remove('selection')
  character.classList.add('selection')
}
