let listaImg = ['./imagens/img-1.jpg', './imagens/img-2.jpg', './imagens/img-3.jpg', './imagens/img-4.jpg']

let setaEsquerda = document.querySelector('.container-seta-esquerda')
let img = document.querySelector('#img')
let setaDireita = document.querySelector('.container-seta-direita')
let marks = document.getElementsByName('mark')

setaEsquerda.addEventListener('click', voltarImg)
setaDireita.addEventListener('click', avançarImg)

let cont = 0
marks[cont].checked = true

export function voltarImg() {
    img.removeAttribute('src')

    cont--
    if(cont < 0) {
        cont = listaImg.length-1
    }

    img.setAttribute('src', listaImg[cont])
    marks[cont].checked = true
}

export function avançarImg() {
    img.removeAttribute('src')

    cont++
    if(cont > listaImg.length-1) {
        cont = 0
    }

    img.setAttribute('src', listaImg[cont])
    marks[cont].checked = true
}
