function calcularDesconto() {
    let preco = document.getElementById('entrada')
    let prc = Number(preco.value)

    let res = document.getElementById('res')

    let desconto = prc - (prc * 5 / 100)

    let precoReal = prc.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let descontoReal = desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    res.innerHTML = `O produto que custava ${precoReal}, na promoção com desconto de 5% vai custar ${descontoReal}`
}
