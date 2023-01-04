let player = document.getElementById('player')
let largBrow = window.screen.width
let largEl = window.getComputedStyle(player).getPropertyValue('width').replace('px', '')

let vel = 2
let dx = 1
let dy = 0
let px = 0
let py = 0
let estado = true

function game() {
    px += dx * vel
    py += dy * vel

    player.style.left = px + 'px'

    if(px > largBrow-largEl) {
        dx = -1
    } else if(px <= 0) {
        dx = 1
    }

    anima = requestAnimationFrame(game)
}

function moverParar() {
    if(estado) {
        estado = false
        player.style.backgroundColor = 'red'
        cancelAnimationFrame(anima)
    } else {
        estado = true
        player.style.backgroundColor = 'blue'
        anima = requestAnimationFrame(game)
    }
}

function mover() {
    if(!estado) {
        estado = true
        player.style.backgroundColor = 'blue'
        anima = requestAnimationFrame(game)
    }
}

function parar() {
    estado = false
    player.style.backgroundColor = 'red'
    cancelAnimationFrame(anima)
}

let anima = requestAnimationFrame(game)
player.addEventListener('click', moverParar)
document.querySelector('.btn-start').addEventListener('click', mover)
document.querySelector('.btn-pause').addEventListener('click', parar)
