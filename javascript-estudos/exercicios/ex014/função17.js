function calcular() {
    let entrada = document.getElementById('entrada')
    let preco = Number(entrada.value)

    let res = document.getElementById('res')

    let sal = preco + (preco * 15 / 100)

    let novoprec = preco.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
    let novoSal = sal.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

    res.innerHTML = `Um funcionario que ganhava ${novoprec}, com 15% de aumento, passa a receber ${novoSal}`
}