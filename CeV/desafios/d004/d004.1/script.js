valores = []

function adicionar() {
    let num = document.getElementById('num')

    let lista = document.getElementById('lista')
    let item = document.createElement('option')

     if(num.value > 100 || num.value == '') {
        alert('valor invalido')
    } else {
        valores.push(num.value)

        lista.appendChild(item)
        item.text = `Valor ${Number(num.value)} adicionado`
    }
    
    num.value = ''
}

function finalizar() {
    let res = document.getElementById('res')
    res.innerHTML = ''

    let soma = 0
    let media = 0
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)

    for(let c = 0;c < valores.length;c++) {
        soma += Number(valores[c])
    }
    media = soma / valores.length

    res.innerHTML += `Ao todo, temos ${valores.length} numeros cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${maior}. <br>`
    res.innerHTML += `O menor valor informado foi ${menor}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
    res.innerHTML += `A media dos valores digitados é ${media}. <br>`
}
