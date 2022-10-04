let valorProduto = (valor, condicao, prest) => {
    let valorPago = 0

    if(condicao == 1) {
        valorPago = valor - (valor * 10 / 100)
        return `Sua compra de ${valor} vai custar ${valorPago} no final`
    }
    else if(condicao == 2) {
        valorPago = valor - (valor * 5 / 100)
        return `Sua compra de ${valor} vai custar ${valorPago} no final`
    }
    else if(condicao == 3) {
        valorPago = valor / 2
        return `Sua compra será parcelada em 2x de ${valorPago}\nSua compra de ${valor} vai custar ${valor} no final`
    }
    else if(condicao == 4) {
        let valorJuros = valor + (valor * 20 / 100)
        valorPago = valorJuros / prest

        return `Sua compra será parcelada em ${prest}x de ${valorPago} COM JUROS\nSua compra de ${valor} vai custar ${valorJuros} no final.`
    }
    else {
        return 'Valor invalido'
    }
}

console.log(valorProduto(400, 2, 10))
