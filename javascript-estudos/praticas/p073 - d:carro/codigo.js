// normal sem blindagem e munição - travar digito - no click
// preencher, quando clicar em 'adicionar' a classe será criada, fazer a adição e mostrar no DOM o conteudo

let blindagem = document.getElementById('blindagem')
let municao = document.getElementById('municao')

let tipoMilitar = document.getElementById('t-militar')
let tipoNormal = document.getElementById('t-normal')

let btn = document.getElementById('t-btn')

function isDisabled() {
    if(tipoMilitar.checked) {
        blindagem.removeAttribute('disabled')
        municao.removeAttribute('disabled')
    } else {
        blindagem.setAttribute('disabled', '')
        municao.setAttribute('disabled', '')
    }
}

function carMake() {
    let nome = document.getElementById('nome').value
    let porta = document.getElementById('portas').value

    let conteudo = document.getElementById('conainer-conteudo')

    class Carro {
        constructor (nome, porta, blind, muni) {
            this.nome = nome
            this.porta = porta
            this.blind = blind
            this.muni = muni
        }
    }

    let carroNormal = new Carro(nome, porta)
    let carroMilitar = new Carro(nome, porta, blindagem.value, municao.value)

    if(!tipoMilitar.checked) {
        conteudo.innerHTML += `<div></p>Nome: ${carroNormal.nome}</p></p>Porta: ${carroNormal.porta}</p><p>Blindagem: ${carroNormal.blind}</p><p>Munição: ${carroNormal.muni}</p></div>`
    } else {
        conteudo.innerHTML += `<div></p>Nome: ${carroMilitar.nome}</p></p>Porta: ${carroMilitar.porta}</p><p>Blindagem: ${carroMilitar.blind}</p><p>Munição: ${carroMilitar.muni}</p></div>`
    }
}

tipoMilitar.addEventListener('click', isDisabled)
tipoNormal.addEventListener('click', isDisabled)

btn.addEventListener('click', carMake)
