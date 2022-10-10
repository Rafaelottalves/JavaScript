(function (valor) {
    let lista = []

    for(let c = 0;c < valor.length;c++) {
        lista.push(valor[c])
    }

    for(c in lista) {
        console.log(lista[c])
    }
})('rafael ott alves')
