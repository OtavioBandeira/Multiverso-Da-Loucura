import { Actores } from "./Actores.js"
import { imgToCharacterSelect, nameToCharacterSelect, selectToCharacter, actorToSelect, descriptionToCharacterSelect } from "./charactersSelected.js"
import { descriptionActores } from "./descriptionActores.js"

const characters = document.querySelectorAll('.character')

const elizabethOlsenImg = `../../assets/imagensAtores/Elizabeth Olsen.png`
const xochitlGomezImg = `../../assets/imagensAtores/Xochitl Gomez.png`
const benedictCumberbatchImg = `../../assets/imagensAtores/Benedict Cumberbatch.png`
const benedictWongImg = `../../assets/imagensAtores/Benedict Wong.png`
const charlizeTheronImg = `../../assets/imagensAtores/Charlize Theron.png`
const hayleyAtwellImg = `../../assets/imagensAtores/Hayley Atwell.png`
const lashanaLynchImg = `../../assets/imagensAtores/Lashana Lynch.png`
const patrickStewartImg = `../../assets/imagensAtores/Patrick Stewart.png`
const rachelMcAdamsImg = `../../assets/imagensAtores/Rachel McAdams.png`
const johnKrasinskiImg = `../../assets/imagensAtores/John Krasinski.png`
const ansonMountImg = `../../assets/imagensAtores/Anson Mount.png`
const chiwetelEjioforImg = `../../assets/imagensAtores/Chiwetel Ejiofor.png`

const descriptions = descriptionActores.map(descriptionActores => {
  return {
    benedictCumberbatchDescription: descriptionActores.benedictCumberbatchDescription,
    elizabethOlsenDescription: descriptionActores.elizabethOlsenDescription,
    benedictWongDescription: descriptionActores.benedictWongDescription,
    xochitlGomezDescription: descriptionActores.xochitlGomezDescription,
    ansonMountDescription: descriptionActores.ansonMountDescription,
    rachelMcAdamsDescription: descriptionActores.rachelMcAdamsDescription,
    patrickStewartDescription: descriptionActores.patrickStewartDescription,
    lashanaLynchDescription: descriptionActores.lashanaLynchDescription,
    johnKrasinskiDescription: descriptionActores.johnKrasinskiDescription,
    hayleyAtwellDescription: descriptionActores.hayleyAtwellDescription,
    chiwetelEjioforDescription: descriptionActores.chiwetelEjioforDescription,
    charlizeTheronDescription: descriptionActores.charlizeTheronDescription,
  }
})

const benedictCumberbatchDescription = descriptions[0].benedictCumberbatchDescription
const elizabethOlsenDescription = descriptions[1].elizabethOlsenDescription
const benedictWongDescription = descriptions[2].benedictWongDescription
const xochitlGomezDescription = descriptions[3].xochitlGomezDescription
const ansonMountDescription = descriptions[4].ansonMountDescription
const rachelMcAdamsDescription = descriptions[5].rachelMcAdamsDescription
const patrickStewartDescription = descriptions[6].patrickStewartDescription
const lashanaLynchDescription = descriptions[7].lashanaLynchDescription
const johnKrasinskiDescription = descriptions[8].johnKrasinskiDescription
const hayleyAtwellDescription = descriptions[9].hayleyAtwellDescription
const chiwetelEjioforDescription = descriptions[10].chiwetelEjioforDescription
const charlizeTheronDescription = descriptions[11].charlizeTheronDescription

export const xochitlGomez = new Actores(xochitlGomezImg, "Xochitl Gomez", xochitlGomezDescription)
export const benedictCumberbatch = new Actores(benedictCumberbatchImg, "Benedict Cumberbatch", benedictCumberbatchDescription)
export const elizabethOlsen = new Actores(elizabethOlsenImg, "Elizabeth Olsen", elizabethOlsenDescription)
export const benedictWong = new Actores(benedictWongImg, "Benedict Wong", benedictWongDescription)
export const charlizeTheron = new Actores(charlizeTheronImg, "Charlize Theron", charlizeTheronDescription)
export const hayleyAtwell = new Actores(hayleyAtwellImg, "Heyley Atwell", hayleyAtwellDescription)
export const lashanaLynch = new Actores(lashanaLynchImg, "Lashana Lynch", lashanaLynchDescription)
export const patrickStewart = new Actores(patrickStewartImg, "Patrick Stewart", patrickStewartDescription)
export const rachelMcAdams = new Actores(rachelMcAdamsImg, "Rachel McAdams", rachelMcAdamsDescription)
export const johnKrasinski = new Actores(johnKrasinskiImg, "John Krasinski", johnKrasinskiDescription)
export const ansonMount = new Actores(ansonMountImg, "Anson Mount", ansonMountDescription)
export const chiwetelEjiofor = new Actores(chiwetelEjioforImg, "Chiwetel Ejiofor", chiwetelEjioforDescription)

characters.forEach((character)=> {
  character.addEventListener('click', ()=> {
    selectToCharacter(character)
    imgToCharacterSelect(character)
    nameToCharacterSelect(character)
    actorToSelect(character)
    descriptionToCharacterSelect(character)
  })
})

