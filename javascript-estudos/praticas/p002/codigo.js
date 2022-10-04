let calcular = () => {
    let valorCasa = document.getElementById('valCasa')
    valorCasa.value = ''
    valorCasa.focus()
    
    let valCasa = Number(valorCasa.value)
    let valCasaReal = valCasa.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

    let salario = document.getElementById('sal')
    salario.value = ''

    let sal = Number(salario.value)

    let anosPagando = document.getElementById('anos')
    anosPagando.value = ''

    let anos = Number(anosPagando.value)

    let res = document.getElementById('res')

    let quantMes = anos * 12
    let valMes = valCasa / quantMes
    let valMesReal = valMes.toLocaleString('pt-br', {style:'currency', currency:'BRL'})

    let minimo = sal * 30 / 100

    res.innerHTML = ''
    res.innerHTML += `Para pagar uma casa de ${valCasaReal} em ${anos} anos a prestação será de ${valMesReal}`

    if(valMes <= minimo) {
        res.innerHTML += '<p>Emprestimo pode ser <strong>CONCEDIDO!</strong></p>'
    }
    else {
        res.innerHTML += '<p>Emprestimo <strong>NEGADO!</strong></p>'
    }
}
