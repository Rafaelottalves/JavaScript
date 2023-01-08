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

        if(minAtual == 0 && secAtual == 0) {
            alert('Seu tempo acabou')

            let containerPalavra = document.querySelector('.container-resp')
            let inputList = containerPalavra.childNodes

            for(let i = 3;i < inputList.length;i++) { // Resetar pro começo
                inputList[i].setAttribute('readyonly', 'true')
            }
        }
    }

    let interval = setInterval(timer, 1000)
}

function addLetraCerta(containerPalavra, letra, posPalavraAdd, arrTentativa) {
    let arrItens = containerPalavra.childNodes

    for(let i = 0;i < arrTentativa.length;i++) {
        for(let pos of posPalavraAdd) {
            if(i == pos) {
                arrItens[i+3].value = letra
            }
        }
    }
}

function chutarPalavra(listaInputs, inputTentativa, btnJogada, tipoAleat) {
    alert('Você tem apenas 1 chance, chute a palavra certa')
    inputTentativa.setAttribute('readonly', 'true')
    btnJogada.setAttribute('disabled', 'true')

    for(let i = 3;i < listaInputs.length;i++) {
        if(listaInputs[i].value == '') {
            listaInputs[i].setAttribute('maxlength', '1')
        } else {
            listaInputs[i].setAttribute('readonly', 'true')
        }
    }

    let estruturaForca = document.querySelector('.estrutura-forca')
    let btnUltimaTent = document.createElement('button')
    btnUltimaTent.innerHTML = 'Chutar'

    let tamanPalavra = listaInputs.length * 43

    btnUltimaTent.style.left = tamanPalavra + 'px'

    let click = 0
    function verifChute() {
        click++

        if(click == 1) {
            let palavra = ''
            
            for(let i = 3;i < listaInputs.length;i++) {
                palavra += listaInputs[i].value
            }

            if(palavra == tipoAleat.toLowerCase()) {
                alert('Parabens vc acertou')
            } else {
                alert(`A palavra esta... ERRADA, a palavra certa é "${tipoAleat.toLowerCase()}"`)
            }
        }
    }

    function aprovChute() {
        aprov = true

        for(let i = 3;i < listaInputs.length;i++) {
            if(listaInputs[i].value == '' || listaInputs[i].value == undefined) {
                aprov = false
            }
        }

        if(aprov == false) {
            alert('Tente chutar algo ou completar a palavra')
        } else {
            verifChute()
        }
    }

    btnUltimaTent.addEventListener('click', aprovChute)

    estruturaForca.appendChild(btnUltimaTent)
}

function jogada(containerPalavra, tipoAleat) {
    let inputTentativa = document.getElementById('input-tentativa')
    inputTentativa.removeAttribute('disabled')
    inputTentativa.focus()

    let btnJogada = document.getElementById('btn-jogada')
    btnJogada.removeAttribute('disabled')

    let nxt = 0

    function validarJogada() {
        let palavra = inputTentativa.value
        let reg = /^[a-zA-ZáéíóúâêîôũàèìòùãẽĩõũÁÉÍÓÚÂÊÎÔŨÀÈÌÒÙÃẼĨÕŨ\s]$/

        let listaInputs = document.querySelector('.container-resp').childNodes

            let letra = []

            for(let item of listaInputs) {
                if(reg.test(item.value)) {
                    letra.push(item.value)
                }
            }

            console.log(letra)

            if(letra.length == listaInputs.length-3) {
                alert('Parabens! Você desvendou a palavra')
                console.log(letra.length)
            }

        if(reg.test(palavra)) {
            inputTentativa.value = ''
            inputTentativa.focus()

            let arrTentativa = tipoAleat.toLowerCase().split('')

            let posPalavra = arrTentativa.indexOf(palavra.toLowerCase())
            let posPalavraAdd = []

            let listaInputs = document.querySelector('.container-resp').childNodes

            for(let item = 0;item < arrTentativa.length;item++) {
                if(arrTentativa[item] == palavra) {
                    posPalavraAdd.push(item)
                }
            }

            if(posPalavra != -1) {
                addLetraCerta(containerPalavra, palavra, posPalavraAdd, arrTentativa)

                let letra = []

                for(let item of listaInputs) {
                    if(reg.test(item.value)) {
                        letra.push(item.value)
                    }
                }

                if(letra.length == listaInputs.length-3) {
                    alert('Parabens! Você desvendou a palavra')
                }
            }

            else {
                nxt++
                alert('Letra errada')
                let sprites = ['spr-1.png', 'spr-2.png', 'spr-3.png', 'spr-4.png', 'spr-5.png', 'spr-6.png', 'spr-7.png', 'spr-8.png', 'spr-9.png', 'spr-10.png', 'spr-11.png', 'spr-12.png',]

                if(nxt <= sprites.length) {
                    let img = document.querySelector('.container-forca > img')
                    img.src = './img/spritesTipo-01/spr-' + nxt + '.png'   
                }

                let containerLetraErrada = document.querySelector('.cimiterio')
                let letraErrada = document.createElement('p')

                if(nxt == 1) {
                    letraErrada.innerHTML += palavra
                    containerLetraErrada.appendChild(letraErrada)
                } else {
                    let nodeLetraErrada = containerLetraErrada.childNodes
                    let arrLetraErrada = []

                    for(let item of nodeLetraErrada) {
                        arrLetraErrada.push(item.innerHTML)
                    }

                    if(arrLetraErrada.indexOf(palavra) == -1) {
                        letraErrada.innerHTML += palavra
                        containerLetraErrada.appendChild(letraErrada)
                    }
                }
            }

            let numTentativas = document.querySelector('.container-tentativas > p > span')

            if(numTentativas.innerHTML > 1) {
                numTentativas.innerHTML -= 1
            } else if(numTentativas.innerHTML <= 1) {
                chutarPalavra(listaInputs, inputTentativa, btnJogada, tipoAleat)
            }
        }
        
        else {
            inputTentativa.focus()
            inputTentativa.value = ''
            alert('Não é permitido numero ou caractere especial')
        }
    }

    btnJogada.addEventListener('click', validarJogada)
}

function diminuirTentativas(tipoAleat) {
    let numTentativas = document.querySelector('.container-tentativas > p > span')
    numTentativas.innerHTML = 12 //tipoAleat.length - 2
}

function addTipo(posTema, palavras) {
    let tipoTema = palavras[posTema].tipo
    let tipoAleat = tipoTema[Math.floor(Math.random() * tipoTema.length)]

    let containerPalavra = document.querySelector('.container-resp')

    for(let pos = 0;pos < tipoAleat.length;pos++) {
        let palavraTipoAleat = document.createElement('input')
        palavraTipoAleat.setAttribute('type', 'text')
        palavraTipoAleat.setAttribute('maxlength', '0')

        containerPalavra.appendChild(palavraTipoAleat)
    }

    jogada(containerPalavra, tipoAleat)
    diminuirTentativas(tipoAleat)
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

function adicionarTentativas(tentativas) { // !!
    let containTent = document.querySelector('.container-tentativas > p')
    let tent = document.createElement('span')

    containTent.appendChild(tent)
}

function game() {
    let palavras = [
        {tema: 'Animal', tipo: ['baleia','caranguejo', 'elefante', 'flamingo', 'gato', 'hipopótamo']},
        {tema: 'Pais', tipo: ['Afeganistão', 'Bélgica', 'Brasil', 'Camarões', 'Emirados Árabes Unidos']}
    ]

    adicionarTentativas()
    adicionarTemaTipo(palavras)
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
// botar a opção de reiniciar ou desistir // msg na tela: quer desistir? quer reinicar? prompt?
// quando reinirar ou desistir dizer qual era a palavra
