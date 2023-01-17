let btnComecar = document.getElementById('btn-começar')

function executar() {
    // Declarações globais
    let blocoMenu = document.getElementById('bloco-menu')
    let containerTempo = document.querySelectorAll('.tempo')
    let containerTema = document.querySelector('#container-tema')
    let containerPalavra = document.querySelector('#container-palavra')

    let inputChute = document.querySelector('#input-chute')
    inputChute.focus()

    let imgForca = document.querySelector('#img-forca')
    let imgBoneco = document.querySelector('#img-boneco')

    let btnChute = document.querySelector('#btn-chute')

    let telas = document.querySelector('#telas')

    let containerPerca = document.querySelector('#container-tela')
    let tituloPerca = document.querySelector('div#container-tela h2')
    let txtPerca = document.querySelector('div#container-tela p')
    let imgPerca = document.querySelector('div#container-tela img')
    let btnPerca = document.querySelector('div#container-tela button')

    let palavras = [
        {tema: 'Animal', tipo: ['baleia','caranguejo', 'elefante', 'flamingo', 'gato', 'hipopótamo']},
        {tema: 'Pais', tipo: ['Afeganistão', 'Bélgica', 'Brasil', 'Camarões', 'Emirados Árabes Unidos']}
    ]

    let posTema = Math.floor(Math.random() * palavras.length)
    let temaAleatorio = palavras[posTema].tema

    let tipoGeral = palavras[posTema].tipo
    let tipoAleatorio = tipoGeral[Math.floor(Math.random() * tipoGeral.length)].toLowerCase()

    // Execuções
    function presetMsgFim(anim, titulo, txt, img, cor) {
        let anima = anim
        document.querySelector('#palavra-certa').innerHTML = `"${tipoAleatorio}"`

        telas.style.top = '0'
        containerPerca.style.top = '50%'

        tituloPerca.innerHTML = titulo
        txtPerca.innerHTML = txt

        imgPerca.setAttribute('src', img)

        tituloPerca.style.cssText = `${anima} color: ${cor};`
        txtPerca.style.cssText = `${anima} color: ${cor};`
        imgPerca.style.cssText = `${anima}`
        btnPerca.style.cssText = `${anima} background-color: ${cor};`
    }

    let transicaoMenu = ((blocoMenu) => {
        blocoMenu.style.top = '-100vh'
    })(blocoMenu)

    let contador = (() => {
        let minuto = 2
        let segundo = 5

        let interval = setInterval(function() {
            segundo--

            if(segundo <= 0) {
                if(minuto > 0) {
                    minuto--
                    segundo = 59
                } else {
                    clearInterval(interval)
                }
            }

            if(minuto < 10) {
                containerTempo[0].innerHTML = 0
                containerTempo[1].innerHTML = minuto
            } else {
                let newMin1 = minuto.toString()[0]
                let newMin2 = minuto.toString()[1]

                containerTempo[0].innerHTML = Number(newMin1)
                containerTempo[1].innerHTML = Number(newMin2)
            }

            if(segundo < 10) {
                containerTempo[2].innerHTML = 0
                containerTempo[3].innerHTML = segundo
            } else {
                let newSec1 = segundo.toString()[0]
                let newSec2 = segundo.toString()[1]

                containerTempo[2].innerHTML = Number(newSec1)
                containerTempo[3].innerHTML = Number(newSec2)
            }

            if(minuto == 0 && segundo == 0) {
                let anima = 'animation: pisca-letra 1.3s cubic-bezier(0.16, 1, 0.3, 1) .5s 3;'
                document.querySelector('#palavra-certa').innerHTML = `"${tipoAleatorio}"`

                telas.style.top = '0'
                containerPerca.style.top = '50%'

                tituloPerca.style.cssText = `${anima}`
                txtPerca.style.cssText = `${anima}`
                imgPerca.style.cssText = `${anima}`
                btnPerca.style.cssText = `${anima}`
            }
        }, 1000)

        btnPerca.addEventListener('click', function() {
            location.reload()
        })
    })()

    let addTema = (() => {
        let containerTemaAleatorio = document.createElement('p')
        containerTemaAleatorio.innerHTML = temaAleatorio

        containerTema.appendChild(containerTemaAleatorio)
    })()

    let addQuantLetra = (() => {
        for(let pos = 0;pos < tipoAleatorio.length;pos++) {
            let inputLetra = document.createElement('input')

            inputLetra.setAttribute('type', 'text')
            inputLetra.setAttribute('maxlength', '0')

            containerPalavra.appendChild(inputLetra)
        }
    })()

    let listaInput = document.querySelectorAll('#container-palavra > input')
    let next = 0
    let tentativas = 6

    let validarChute = () => {
        let palavraChute = inputChute.value.toLowerCase()

        inputChute.value = ''
        inputChute.focus()

        let validPalavra = /^[a-zA-ZáéíóúâêîôũàèìòùãẽĩõũÁÉÍÓÚÂÊÎÔŨÀÈÌÒÙÃẼĨÕŨ\s]$/

        if(validPalavra.test(palavraChute)) {
            let listaLetrasTipo = tipoAleatorio.split('')

            let posPalavraCerta = listaLetrasTipo.indexOf(palavraChute)
            let posPalavraCertaAdd = []

            let confirmLetra = []

            for(let pos = 0;pos < listaLetrasTipo.length;pos++) {
                if(listaLetrasTipo[pos] == palavraChute) {
                    posPalavraCertaAdd.push(pos)
                }
            }

            if(posPalavraCerta != -1) {
                for(let pos = 0;pos < listaLetrasTipo.length;pos++) {
                    for(let item of posPalavraCertaAdd) {
                        if(pos == item) {
                            listaInput[pos].value = palavraChute
                        }
                    }
                }

                for(let item of listaInput) {
                    if(validPalavra.test(item.value)) {
                        confirmLetra.push(item.value)
                    }
                }

                if(confirmLetra.length == listaInput.length) {
                    presetMsgFim('animation: treme-letra .4s ease .5s 3;', 'Você ganhou!', 'Parabens!! Você acertou todas as letras da palavra', './img/winner-3.png', 'blue')
                }
            } else {
                next++

                let contTelaLetra_errada = document.querySelector('.container-tela-letra_errada')
                contTelaLetra_errada.style.cssText = `animation: aviso-letra_errada 2.3s ease-in;`

                setTimeout(function() {
                    contTelaLetra_errada.removeAttribute('style')
                },1000)

                let spritesForca = ['spr_forca-1.png', 'spr_forca-2.png', 'spr_forca-3.png', 'spr_forca-4.png', 'spr_forca-5.png', 'spr_forca-6.png'] 
                let sprites = ['sprite-2.png', 'sprite-3.png', 'sprite-4.png', 'sprite-5.png', 'sprite-6.png']

                if(next <= spritesForca.length) {
                    imgForca.src = './img/spr_forca/spr_forca-' + next + '.png'
                }
                if(next < sprites.length+1) {
                    imgBoneco.src = './img/sprites/sprite-' + (next+1) + '.png' //4
                    if(next >= 4 && next <= 6) {
                        imgBoneco.style.width = '23px'
                    }
                } else {
                    imgBoneco.remove()
                }

                if(tentativas > 1) {
                    tentativas--
                } else {
                    /* alert('Você desperdiçou suas chances. Tente acertar a palavra completa') */

                    

                    let posSemLetra
                    
                    for(let pos = 0;pos < listaInput.length;pos++) {
                        if(listaInput[pos].value == '') {
                            listaInput[pos].setAttribute('maxlength', '1')
                        } else {
                            listaInput[pos].addEventListener('focus',function() {
                                listaInput[posSemLetra].focus()
                            })
                        }
                    }

                    for(let pos = 0;pos < listaInput.length;pos++) {
                        if(listaInput[pos].value == '') {
                            posSemLetra = pos
                            break
                        }
                    }
                    listaInput[posSemLetra].focus()
                }
            }
        }
    }
    btnChute.addEventListener('click', validarChute)
}

btnComecar.addEventListener('click', executar)
