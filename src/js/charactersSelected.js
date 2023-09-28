import { ansonMount, benedictCumberbatch, benedictWong, charlizeTheron, chiwetelEjiofor, elizabethOlsen, hayleyAtwell, johnKrasinski, lashanaLynch, patrickStewart, rachelMcAdams, xochitlGomez } from "./Actores.js"

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

export function actorToSelect(character) {
  const actorImg = document.querySelector('.imgActor')
  const nameActor = document.querySelector('.nameAtores')
  const descriptionActor = document.querySelector('.descriptionAtores')
  const charId = character.dataset.name

  switch(charId){
    case "Feiticeira Escarlate":
      nameActor.innerText = elizabethOlsen.name
      actorImg.src = elizabethOlsen.imagem
      descriptionActor.innerText = elizabethOlsen.description
    break
    case "Doutor Estranho":
      nameActor.innerText = benedictCumberbatch.name
      actorImg.src = benedictCumberbatch.imagem
      descriptionActor.innerText = benedictCumberbatch.description
    break
    case "America Chavez":
      nameActor.innerText = xochitlGomez.name
      actorImg.src = xochitlGomez.imagem
      descriptionActor.innerText = xochitlGomez.description
    break
    case "Clea":
      nameActor.innerText = charlizeTheron.name
      actorImg.src = charlizeTheron.imagem
      descriptionActor.innerText = charlizeTheron.description
    break
    case "Capitã Carter":
      nameActor.innerText = hayleyAtwell.name
      actorImg.src = hayleyAtwell.imagem
      descriptionActor.innerText = hayleyAtwell.description
    break
    case "Capitã Marvel":
      nameActor.innerText = lashanaLynch.name
      actorImg.src = lashanaLynch.imagem
      descriptionActor.innerText = lashanaLynch.description
    break
    case "Wong":
      nameActor.innerText = benedictWong.name
      actorImg.src = benedictWong.imagem
      descriptionActor.innerText = benedictWong.description
    break
    case "Charles Xavier":
      nameActor.innerText = patrickStewart.name
      actorImg.src = patrickStewart.imagem
      descriptionActor.innerText = patrickStewart.description
    break
    case "Christine Palmer":
      nameActor.innerText = rachelMcAdams.name
      actorImg.src = rachelMcAdams.imagem
      descriptionActor.innerText = rachelMcAdams.description
    break
    case "Reed Richards":
      nameActor.innerText = johnKrasinski.name
      actorImg.src = johnKrasinski.imagem
      descriptionActor.innerText = johnKrasinski.description
    break
    case "Raio Negro":
      nameActor.innerText = ansonMount.name
      actorImg.src = ansonMount.imagem
      descriptionActor.innerText = ansonMount.description
    break
    case "Barão Mordo":
      nameActor.innerText = chiwetelEjiofor.name
      actorImg.src = chiwetelEjiofor.imagem
      descriptionActor.innerText = chiwetelEjiofor.description
    break
  }
}