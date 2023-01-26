let btnIniciar
let bola
let cpu
let jogador
let painelPontos

let frames

let posBolaX, posBolaY
let posJogadorX, posJogadorY, posCpuX, posCpuY

let dirJy

let posJogIniY = 180
let posCpuIniY= 180
let posBolaIniX = 475
let posBolaIniY = 240

let campoX = 0
let campoY = 0
let campoW = 960
let campoH = 500

let barraW = 20
let barraH = 140
let bolaW = 20
let bolaH = 20

let bolaX, bolaY
let cpuY = 0

let velBola, velCpu, velJogador

let ponto = 0
let tecla
let jogo = false

function controlaJog() {
    if(jogo) {
        posJogadorY += velJogador * dirJy
        jogador.style.top = posJogadorY + 'px'
    }
}

function teclaDw(evt) {
    tecla = evt.key
    console.log(tecla)

    if(tecla == 'ArrowUp') {
        dirJy = -1
    } else if(tecla == 'ArrowDown') {
        dirJy = 1
    }
}

function teclaUp(evt) {
    tecla = evt.key

    if(tecla == 'arrowUp') {
        dirJy = 0
    } else if(tecla == 'arrowDown') {
        dirJy = 1
    }
}

function game() {
    if(jogo) {
        controlaJog()
    }

    frames = requestAnimationFrame(game)
}

function executaGame() {
    if(!jogo) {
        cancelAnimationFrame(frames)
        jogo = true

        dirJy = 0
        
        posBolaX = posBolaIniX
        posBolaY = posBolaIniY

        posJogadorY = posJogIniY

        posCpuY = posCpuIniY

        velBola = velCpu = velJogador = 8

        game()
    }
}

function inicializa() {
    btnIniciar = document.getElementById('btIniciar')
    btnIniciar.addEventListener('click', executaGame)

    jogador = document.getElementById('jog1')
    cpu = document.getElementById('jog2')
    bola = document.getElementById('bola')
    painelPontos = document.getElementById('pnPts')

    document.addEventListener('keydown', teclaDw)
    document.addEventListener('keyup', teclaUp)
}

window.addEventListener('load', inicializa)

/* function iniciaJogo() {
    let vel = 8
    let dy = 0

    let bola = document.getElementById('bola')

    let plataformaEsquerda = document.getElementById('jog1')
    let plataformaDireita = document.getElementById('jog2')

    let py = plataformaEsquerda.offsetTop

    function movPlataforma(evt) {
        let tecla = evt.key
        console.log(tecla)
        if(tecla == 'ArrowUp') {
            dy = -1
        } else if(tecla == 'ArrowDown') {
            dy = 1
        }
    }

    function stopPlataforma(evt) {
        let tecla = evt.key

        if(tecla == 'w') {
            dy = 0
        }
    }

    function frames() {
        py += dy * vel
        
        plataformaEsquerda.style.top = py + 'px'
    }

    document.addEventListener('keydown', movPlataforma)
    document.addEventListener('keyup', stopPlataforma)
    setInterval(frames, 20)
} */
