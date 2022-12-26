let nomeProd = document.querySelector('#nome')
let valorProd = document.querySelector('#preco')

let corpoTabela = document.querySelector('.corpo-tabela')

let ProdLista = []
let cont = 0

function adicionar() {
    corpoTabela.innerHTML = ''
    cont++

    let produto = new Produto(nomeProd.value, valorProd.value)
    ProdLista.push(produto)

    ProdLista.forEach((produto) => {
        let tr = document.createElement('tr')
        tr.setAttribute('class', 'meio')

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')

        let i1 = document.createElement('i')
        i1.setAttribute('class', 'fa-solid fa-pen-to-square')

        let i2 = document.createElement('i')
        i2.setAttribute('class', 'fa-solid fa-trash')
        i2.setAttribute('onclick', 'remover()')

        td1.innerHTML = '1'
        td2.innerHTML = nomeProd.value
        td3.innerHTML = valorProd.value
        td4.appendChild(i1)
        td4.appendChild(i2)

        corpoTabela.appendChild(tr)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        
    })
}

class Produto {
    constructor (nome, valor) {
        this.nome = nome
        this.valor = valor
    }
}

function remover() {
    alert(ProdLista[cont])
}
