let btn1 = document.getElementById('botao1')
btn1.addEventListener('click', adicionar)

function adicionar() {
    let nome = document.querySelector('#t-nome').value
    let conteudo = document.getElementById('conteudo')

    conteudo.innerHTML = nome

    nome = document.querySelector('#t-nome').value = ''
    nome = document.querySelector('#t-nome').focus()
}