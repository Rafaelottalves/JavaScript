function calcDesconto(preco) {
    let desconto = preco - (preco * 5 / 100)
    let novoDesc = desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let novoPrec = preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    return `O produto que custava ${novoPrec}, na promoção com desconto de 5% vai custar ${novoDesc}`
}


let resultado = calcDesconto(100)
console.log(resultado)
