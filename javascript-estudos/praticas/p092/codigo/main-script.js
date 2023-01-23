/* let btn_começar = document.querySelector('#container-conteudo button')

function executar() {
    let blocos = [...document.querySelectorAll('#tabela td')]
    let verifState = false
    
    blocos.forEach((bloco) => {
        bloco.addEventListener('click', (evt) => {
            if(bloco.innerHTML == 'O') {
                bloco.innerHTML == 'O'
            } else if(bloco.innerHTML == '') {
                bloco.innerHTML = 'X'

                let livre = []
                let newBlocos = []

                blocos.forEach((bloco) => {
                    if(bloco.innerHTML == '') {
                        livre.push(true)
                        newBlocos.push(bloco)
                    } else {
                        livre.push(false)
                    }
                })

                if(livre.includes(true) == false) {
                    verifGanhador()
                    if(verifState == false) {
                        console.log('deu velha')
                        endGame('Empate')
                    }
                }

                if(!(livre.includes(true) == false)) {
                    let posAleatoria = Math.floor(Math.random() * newBlocos.length)
                    newBlocos[posAleatoria].innerHTML = 'O'
                }
            }
        })
    })
}
    
btn_começar.addEventListener('click', executar)
 */
import endGame from "./fim_de_jogo.js"

let btn_começar = document.querySelector('#container-conteudo button')

function executar() {
    let blocos = [...document.querySelectorAll('#tabela td')]
    let p1 = document.getElementById('p1').value
    let p2 = document.getElementById('p2').value

    if(p1 == '') {
        p1 = 'p1'
    }
    if(p2 == '') {
        p2 = 'p2'
    }
    
    let verifState = false
    let vez = 'p1'

    function verifGanhador() {
        if(
            blocos[0].innerHTML == 'X' && 
            blocos[1].innerHTML == 'X' &&
            blocos[2].innerHTML == 'X' ||

            blocos[0].innerHTML == 'X' && 
            blocos[3].innerHTML == 'X' &&
            blocos[6].innerHTML == 'X' ||

            blocos[6].innerHTML == 'X' && 
            blocos[7].innerHTML == 'X' &&
            blocos[8].innerHTML == 'X' ||

            blocos[8].innerHTML == 'X' && 
            blocos[5].innerHTML == 'X' &&
            blocos[2].innerHTML == 'X' ||

            blocos[0].innerHTML == 'X' && 
            blocos[4].innerHTML == 'X' &&
            blocos[8].innerHTML == 'X' ||

            blocos[2].innerHTML == 'X' && 
            blocos[4].innerHTML == 'X' &&
            blocos[6].innerHTML == 'X' ||

            blocos[1].innerHTML == 'X' && 
            blocos[4].innerHTML == 'X' &&
            blocos[7].innerHTML == 'X' ||

            blocos[3].innerHTML == 'X' && 
            blocos[4].innerHTML == 'X' &&
            blocos[5].innerHTML == 'X'
        ) {
            verifState = true
            endGame(p1, ' ganhou!')
            clearInterval(verif)
        } else if(
            blocos[0].innerHTML == 'O' && 
            blocos[1].innerHTML == 'O' &&
            blocos[2].innerHTML == 'O' ||

            blocos[0].innerHTML == 'O' && 
            blocos[3].innerHTML == 'O' &&
            blocos[6].innerHTML == 'O' ||

            blocos[6].innerHTML == 'O' && 
            blocos[7].innerHTML == 'O' &&
            blocos[8].innerHTML == 'O' ||

            blocos[8].innerHTML == 'O' && 
            blocos[5].innerHTML == 'O' &&
            blocos[2].innerHTML == 'O' ||

            blocos[0].innerHTML == 'O' && 
            blocos[4].innerHTML == 'O' &&
            blocos[8].innerHTML == 'O' ||

            blocos[2].innerHTML == 'O' && 
            blocos[4].innerHTML == 'O' &&
            blocos[6].innerHTML == 'O' ||

            blocos[1].innerHTML == 'O' && 
            blocos[4].innerHTML == 'O' &&
            blocos[7].innerHTML == 'O' ||

            blocos[3].innerHTML == 'O' && 
            blocos[4].innerHTML == 'O' &&
            blocos[5].innerHTML == 'O'
        ) {
            verifState = true
            endGame(p2, ' Ganhou!')
            clearInterval(verif)
        }
    }
    let verif = setInterval(() => {
        verifGanhador()
    }, 1000)

    blocos.forEach((bloco) => {
        bloco.addEventListener('click', () => {
            if(bloco.innerHTML == 'O') {
                bloco.innerHTML == 'O'
            } else if(bloco.innerHTML == 'X') {
                bloco.innerHTML = 'X'
            } else if(bloco.innerHTML == '') {
                if(vez == 'p1') {
                    bloco.innerHTML = 'X'
    
                    vez = 'p2'
                } else if(vez == 'p2') {
                    bloco.innerHTML = 'O'
    
                    vez = 'p1'
                }

                let livre = []
                let newBlocos = []

                blocos.forEach((bloco) => {
                    if(bloco.innerHTML == '') {
                        livre.push(true)
                        newBlocos.push(bloco)
                    } else {
                        livre.push(false)
                    }
                })

                if(livre.includes(true) == false) {
                    verifGanhador()
                    if(verifState == false) {
                        endGame('', 'Empate')
                    }
                }
            }
        })
    })
}

btn_começar.addEventListener('click', executar)
