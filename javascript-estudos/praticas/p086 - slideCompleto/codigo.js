/*
Depois estudar 'Manipulações de ... (manejo)':

pagina pra adicionar projetos? sobre? tudo?
REFATORAR - DEBUGAR?

Portifolio: seção anual - meus projetos em 20... (meus projetos em 2022, meus projetos em 2023....) */
/* 
Ver os jogos do curso mais pra frente (pro final de tudo(escolher quando)):
 https://www.youtube.com/playlist?list=PLx4x_zx8csUj3IbPQ4_X5jis_SkCol3eC 
*/
// troca por botão ou modo slide

let imgs = []
let slider
let imgAtual
let maxImg
let tmp
let tempotroca
let vtempo
let vbarra

function preCarregar() {
    let s = 1
    for(let i =0;i < 4;i++) {
        imgs[i] = new Image()
        imgs[i].src = `imgs/s${s}.jpg`
        s++
    }
}

function carregarImg(img) {
    slider.style.backgroundImage = `url('${imgs[img].src}')`
    slider.style.backgroundSize = 'cover'
    slider.style.backgroundPosition = 'center'
}

function inicia() {
    preCarregar()
    imgAtual = 0
    maxImg = imgs.length-1
    slider = document.getElementById('slider')
    vbarra = document.getElementById('dv-barra')
    carregarImg(imgAtual)
    tempotroca = 0
    anima()
}

function troca(dir) {
    tempotroca = 0
    imgAtual += dir
    if(imgAtual > maxImg) {
        imgAtual = 0
    } else if(imgAtual<0) {
        imgAtual = maxImg
    }
    carregarImg(imgAtual)
}

function anima() {
    tempotroca++
    if(tempotroca >= 500) {
        tempotroca = 0
        troca(1)
    }
    vtempo = tempotroca / 5
    vbarra.style.width = vtempo + '%'
    window.requestAnimationFrame(anima)
}

window.addEventListener('load', inicia)
