import { voltarImg, avançarImg } from "./modulos/funcionalidades.js"

let setaEsquerda = document.querySelector('.container-seta-esquerda')

export let img = document.querySelector('#img')

let setaDireita = document.querySelector('.container-seta-direita')

setaEsquerda.addEventListener('click', voltarImg)
setaDireita.addEventListener('click', avançarImg)
