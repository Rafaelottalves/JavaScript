// array de objeto separado por temas nos temas as palavras

let btnInicio = document.getElementById('btn-inicio')
let click = 0

function contador() {
    
}

function inicio() {
    click++

    if(click == 1) {
        contador()
    }

    else {
        alert('O jogo ja começou')
    }
}

btnInicio.addEventListener('click', inicio)
