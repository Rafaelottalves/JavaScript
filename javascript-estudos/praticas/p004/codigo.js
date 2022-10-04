let calcPreco = () => {
    let valorProd = document.getElementById('valorProd')
    let valor = Number(valorProd.value)

    let val = valor.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

    let con = document.getElementById('condic')
    let condic = con.value
    let res = document.getElementById('res')

    let valorPago = 0
    let valPago = ''

    if(condic == 1) {
        valorPago = valor - (valor * 10 / 100)
        valPago = valorPago.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

        valorProd.value = ''
        valorProd.focus()
        con.value = ''

        res.innerHTML = `Sua compra de ${val} vai custar ${valPago} no final`
    }
    else if(condic == 2) {
        valorPago = valor - (valor * 5 / 100)
        valPago = valorPago.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

        valorProd.value = ''
        valorProd.focus()
        con.value = ''

        res.innerHTML = `Sua compra de ${val} vai custar ${valPago} no final`
    }
    else if(condic == 3) {
        valorPago = valor / 2
        valPago = valorPago.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

        valorProd.value = ''
        valorProd.focus()
        con.value = ''

        res.innerHTML = `Sua compra será parcelada em 2x de ${valPago}`
    }
    else if(condic == 4) {
        let btn = document.getElementById('btn')
        btn.style.display = 'none'

        let parcela = document.getElementById('parc')

        let entradaParcela = document.createElement('input')
        entradaParcela.setAttribute('placeholder', 'Quantas vezes')
        parcela.appendChild(entradaParcela)

        let contBtn = document.getElementById('cont-btn')

        let botao = document.createElement('input')
        botao.setAttribute('type', 'button')
        botao.setAttribute('value', 'calcular juros')
        botao.setAttribute('onclick', 'calcJuros()')
        contBtn.appendChild(botao)

        botao.onclick = function calcJuros() {
            res.innerHTML = ''
            
            let entParcela = Number(entradaParcela.value)

            valorPago = valor + (valor * 20 / 100)
            let valorPagoReal = valorPago.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

            valPago = valorPago / entParcela
            let valPagoReal = valPago.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

            valorProd.value = ''
            valorProd.focus()
            con.value = ''
            entradaParcela.value = ''

            res.innerHTML += `Sua compra será parcelada em ${entParcela} vezes de ${valPagoReal} COM JUROS`
            res.innerHTML += `<p>Sua compra de ${val} vai custar ${valorPagoReal} no final</p>`
        }
    }
    else if(condic > 4) {
        valorProd.value = ''
        valorProd.focus()
        con.value = ''
        res.innerHTML = 'Condição de pagamento invalido, <strong>tente novamente!</strong>'
    }
}
