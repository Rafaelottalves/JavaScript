let btnInicio = document.getElementById('btn-inicio')
let click = 0

function contador(min, sec) {
    let containContador = document.querySelector('.container-contador')

    let containMin = document.createElement('div')
    let containSeparador = document.createElement('p')
    let containSec1 = document.createElement('div')
    let containSec2 = document.createElement('div')

    containContador.appendChild(containMin)
    containContador.appendChild(containSeparador)
    containContador.appendChild(containSec1)
    containContador.appendChild(containSec2)

    let minAtual = min
    let secAtual = sec

    function timer() {
        secAtual--

        if(secAtual <= 0) {
            if(minAtual > 0) {
                minAtual--
                secAtual = 59
            }
            else {
                clearInterval(interval)
            }
        }

        containMin.innerHTML = minAtual

        if(secAtual < 10) {
            containSec1.innerHTML = 0
            containSec2.innerHTML = secAtual
        }
        else {
            let newSec1 = secAtual.toString()[0]
            let newSec2 = secAtual.toString()[1]

            containSec1.innerHTML = Number(newSec1)
            containSec2.innerHTML = Number(newSec2)
        }
    }

    let interval = setInterval(timer, 1000)
}

function addTipo(posTema, palavras) {
    let tipoTema = palavras[posTema].tipo
    let tipoAleat = tipoTema[Math.floor(Math.random() * tipoTema.length)]

    let containerPalavra = document.querySelector('.container-resp')

    for(let pos = 0;pos < tipoAleat.length;pos++) {
        let palavraTipoAleat = document.createElement('input')
        palavraTipoAleat.setAttribute('type', 'text')
        palavraTipoAleat.setAttribute('maxlength', '1')

        palavraTipoAleat.innerHTML = tipoAleat[pos]

        containerPalavra.appendChild(palavraTipoAleat)
    }
}

function adicionarTemaTipo(palavras) {
    let posTema = Math.floor(Math.random() * palavras.length)
    let temaAleatorio = palavras[posTema].tema
    
    let containerTema = document.querySelector('.container-tema')
    let tema = document.createElement('p')
    tema.innerHTML = temaAleatorio

    addTipo(posTema, palavras)

    containerTema.appendChild(tema)
}

function adicionarTentativas(tentativas) {
    let containTent = document.querySelector('.container-tentativas > p')
    let tent = document.createElement('span')

    quantTent = tentativas

    tent.innerHTML = quantTent

    containTent.appendChild(tent)
}

function game() {
    let palavras = [
        {tema: 'Animal', tipo: ['baleia','caranguejo', 'elefante', 'flamingo', 'gato', 'hipopótamo']},
        {tema: 'Pais', tipo: ['Afeganistão', 'Bélgica', 'Brasil', 'Camarões', 'Emirados Árabes Unidos']}
    ]

    adicionarTemaTipo(palavras)
    adicionarTentativas(8)
}

function inicio() {
    click++

    if(click == 1) {
        btnInicio.style.display = 'none'
        contador(1, 0)
        game()
    }

    else {
        alert('O jogo ja começou')
    }
}

btnInicio.addEventListener('click', inicio)
