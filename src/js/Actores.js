import { ansonMountDescription, benedictCumberbatchDescription, benedictWongDescription, charlizeTheronDescription, chiwetelEjioforDescription, elizabethOlsenDescription, hayleyAtwellDescription, johnKrasinskiDescription, lashanaLynchDescription, patrickStewartDescription, rachelMcAdamsDescription, xochitlGomezDescription } from "./descriptionActores.js"

export class Actores {
  constructor(imagem, name, description){
    this.imagem = imagem
    this.name = name
    this.description = description
  }
}

const elizabethOlsenImg = `/src/assets/imagensAtores/Elizabeth Olsen.png`
const xochitlGomezImg = `/src/assets/imagensAtores/Xochitl Gomez.png`
const benedictCumberbatchImg = `/src/assets/imagensAtores/Benedict Cumberbatch.png`
const benedictWongImg = `/src/assets/imagensAtores/Benedict Wong.png`
const charlizeTheronImg = `/src/assets/imagensAtores/Charlize Theron.png`
const hayleyAtwellImg = `/src/assets/imagensAtores/Hayley Atwell.png`
const lashanaLynchImg = `/src/assets/imagensAtores/Lashana Lynch.png`
const patrickStewartImg = `/src/assets/imagensAtores/Patrick Stewart.png`
const rachelMcAdamsImg = `/src/assets/imagensAtores/Rachel McAdams.png`
const johnKrasinskiImg = `/src/assets/imagensAtores/John Krasinski.png`
const ansonMountImg = `/src/assets/imagensAtores/Anson Mount.png`
const chiwetelEjioforImg = `/src/assets/imagensAtores/Chiwetel Ejiofor.png`

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
