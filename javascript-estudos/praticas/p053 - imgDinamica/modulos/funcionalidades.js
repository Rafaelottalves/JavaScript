import { img } from "../main.js"
import { listaImg } from "./dados.js"

let cont = 0

export function voltarImg() {
    img.removeAttribute('src')

    cont--
    if(cont < 0) {
        cont = listaImg.length-1
    }

    img.setAttribute('src', listaImg[cont])
}

export function avançarImg() {
    img.removeAttribute('src')

    cont++
    if(cont > listaImg.length-1) {
        cont = 0
    }

    img.setAttribute('src', listaImg[cont])
}
