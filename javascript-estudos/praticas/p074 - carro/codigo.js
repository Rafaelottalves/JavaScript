// Separar em modulos

const f_nome = document.getElementById('f_nome')
const f_portas = document.getElementById('f_portas')
const f_blindagem = document.getElementById('f_blindagem')
const f_municao = document.getElementById('f_municao')

const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const btn_addCarro = document.querySelector('#btn_addCarro')
const carros = document.querySelector('#carros')

/* ---------------------------------------------------------------------- */

let arrCarros = []

f_tipoMilitar.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})
f_tipoNormal.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute('disabled', '')
    f_municao.setAttribute('disabled', '')
})

const gerenciarExibCarros = () => {
    carros.innerHTML = ''

    arrCarros.forEach((c) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'carro')

        div.innerHTML = `Nome: ${c.nome} <br>`
        div.innerHTML += `Portas: ${c.portas} <br>`
        div.innerHTML += `Blindagem: ${c.blindagem} <br>`
        div.innerHTML += `Munição: ${c.municao} <br>`
        
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', () => {
    if(f_tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value)
        arrCarros.push(c)
    }
    
    else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        arrCarros.push(c)
    }

    gerenciarExibCarros()
})

/* ---------------------------------------------------------------------- */

class Carro {
    constructor (nome, portas) {
        this.nome = nome
        this.portas = portas
        this.cor = undefined
    }
}

class Militar extends Carro {
    constructor (nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }
}
