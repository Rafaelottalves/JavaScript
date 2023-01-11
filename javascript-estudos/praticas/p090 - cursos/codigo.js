let btn_adicionar = document.querySelector('.btn-adicionar')
let btn_selecionado = document.querySelector('.btn-selecionado')
let btn_remover = document.querySelector('.btn-remover')

let input_nome_curso = document.getElementById('nome-curso')
let caixa_direita = document.querySelector('.caixa-cursos')

let cont = 0

function adicionar() {
    cont++
    let nome = 'selec' + cont

    let label = document.createElement('label')
    let div = document.createElement('div')
    let input = document.createElement('input')
    input.type = 'checkbox'

    div.innerHTML = input_nome_curso.value
    label.setAttribute('name', nome)
    input.name = nome
    
    div.appendChild(input)
    label.appendChild(div)

    caixa_direita.appendChild(label)

    input_nome_curso.value = ''
    input_nome_curso.focus()
}

function selecionar() {
    let arr_inputs = [...document.querySelectorAll('.caixa-cursos > label > div > input')]
    let arr_cursos = [...document.querySelectorAll('.caixa-cursos > label > div ')]

    arr_inputs.map((item, pos) => {
        if(item.checked) {
            let arr_nome_curso = arr_cursos[pos].innerHTML.split('<')
            let nome_curso = arr_nome_curso[0]

            alert('Curso Selecionado: ' + nome_curso)
        }
    })
}

function remover() {
    let arr_inputs = [...document.querySelectorAll('.caixa-cursos > label > div > input')]
    let arr_cursos = [...document.querySelectorAll('.caixa-cursos > label')]

    arr_inputs.map((item, pos) => {
        if(item.checked) {
            arr_cursos[pos].remove()
        }
    })
}

btn_adicionar.addEventListener('click', adicionar)
btn_selecionado.addEventListener('click', selecionar)
btn_remover.addEventListener('click', remover)
