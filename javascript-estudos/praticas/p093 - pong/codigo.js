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
let posJogadorIniX = 20
let posCpuIniY= 180
let posCpuIniX = 920
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

function controlaCpu() {
    if(jogo) {
        if(posBolaX > (campoW / 2) && bolaX > 0) {
            if(posBolaY + (bolaH / 2) > posCpuY + (barraH / 2) + velCpu) {
                if(posCpuY + barraH <= campoH) {
                    posCpuY += velCpu
                }
            } else if(posBolaY + (bolaH / 2) < posCpuY + (barraH / 2) - velCpu) {
                if(posCpuY >= 0) {
                    posCpuY -= velCpu
                }
            }
        } else {
            if(posCpuY + (barraH / 2) < campoH / 2) {
                posCpuY += velCpu
            } else if(posCpuY + (barraH / 2) > campoH / 2) {
                posCpuY -= velCpu
            }
        }
        cpu.style.top = posCpuY + 'px'
    }
}

function controlaJog() {
    if(jogo) {
        posJogadorY += velJogador * dirJy

        if(posJogadorY + barraH >= campoH || posJogadorY <= 0) {
            posJogadorY += (velJogador * dirJy) * -1
        }
        jogador.style.top = posJogadorY + 'px'
    }
}

function controlaBola() {
    posBolaY += velBola * bolaY
    posBolaX += velBola * bolaX

    if(posBolaX <= posJogadorX+barraW && posBolaY+bolaH >= posJogadorY && posBolaY <= posJogadorY+barraH) {
        bolaY = ( (posBolaY + (bolaH/2)) - (posJogadorY + (barraH/2)) ) / 16
        bolaX *= -1
    }

    if(posBolaX >= posCpuX-barraW && posBolaY+bolaH >= posCpuY && posBolaY <= posCpuY+barraH) {
        bolaY = ( (posBolaY + (bolaH/2)) - (posCpuY + (barraH/2)) ) / 16
        bolaX *= -1
    }

    if(posBolaY >= 480 ||  posBolaY <= 0) {
        bolaY *= -1 
    }

    if(posBolaX >= (campoW-bolaW)) {
        velBola = 0

        posBolaX = posBolaIniX
        posBolaY = posBolaIniY

        posJogadorY = posJogIniY
        jogador.style.top = posJogadorY + 'px'

        posCpuY = posCpuIniY
        cpu.style.top = posCpuY + 'px'

        ponto++
        painelPontos.value = ponto

        jogo = false
    } else if(posBolaX <= 0) {
        velBola = 0

        posBolaX = posBolaIniX
        posBolaY = posBolaIniY

        posJogadorY = posJogIniY
        jogador.style.top = posJogadorY + 'px'

        posCpuY = posCpuIniY
        cpu.style.top = posCpuY + 'px'

        ponto--
        painelPontos.value = ponto

        jogo = false
    }

    bola.style.top = posBolaY + 'px'
    bola.style.left = posBolaX + 'px'
}

function teclaDw(evt) {
    tecla = evt.key

    if(tecla == 'ArrowUp') {
        dirJy = -1
    } else if(tecla == 'ArrowDown') {
        dirJy = 1
    }
}

function teclaUp(evt) {
    tecla = evt.key

    if(tecla == 'ArrowUp') {
        dirJy = 0
    } else if(tecla == 'ArrowDown') {
        dirJy = 0
    }
}

function game() {
    if(jogo) {
        controlaJog()
        controlaBola()
        controlaCpu()
    }

    frames = requestAnimationFrame(game)
}

function executaGame() {
    if(!jogo) {
        cancelAnimationFrame(frames)
        jogo = true

        dirJy = 0
        
        bolaY = 0
        Math.random() * 10 < 5 ? bolaX = -1 : bolaX = 1

        posBolaX = posBolaIniX
        posBolaY = posBolaIniY

        posJogadorY = posJogIniY
        posJogadorX = posJogadorIniX

        posCpuY = posCpuIniY
        posCpuX = posCpuIniX

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
