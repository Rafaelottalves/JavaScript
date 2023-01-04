let btn = document.querySelector('.btn')
let relogio = document.querySelector('.relogio')
let borda = document.querySelector('container-time')

let hor = document.querySelector('#hor')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')

function startTime() {
    tempo = setInterval(() => {
        let dt = new Date()
        let hora = dt.getHours()
        let minuto = dt.getMinutes()
        let segundo = dt.getSeconds()

        if(hora < 10) {
            hor.innerHTML = '0' + hora + ':'
        } else {
            hor.innerHTML = hora + ':'
        }

        if(minuto < 10) {
            min.innerHTML = '0' + minuto + ':'
        } else {
            min.innerHTML = minuto + ':'
        }

        if(segundo < 10) {
            sec.innerHTML = '0' + segundo
        } else {
            sec.innerHTML = segundo
        }
    }, 1000)
}

document.getElementsByTagName('body')[0].setAttribute('onload', 'startTime()')

let click = 0

function clicou() { //tempo para
    if(click % 2 == 0) {
        btn.style.height = '5px'
        btn.style.top = '143px'
        clearInterval(tempo)
        ++click
    } else { // tempo volta
        btn.style.height = '10px'
        btn.style.top = '138px'
        startTime()
        ++click
    }
}

btn.addEventListener('click', clicou)
