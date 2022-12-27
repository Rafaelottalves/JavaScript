function capitalizar(vetor) {
    let modificado = []

    for(let i = 0;i < vetor.length;i++) {
        let letraIni = vetor[i].charAt(0).toUpperCase()
        let restoTxt = vetor[i].slice(1)
        let result = letraIni + restoTxt
    
        modificado.push(result)
    }

    return modificado
}

function ordenar(vetor) {
    return vetor.sort(function(a, b) {
        return a.localeCompare(b)
    })
}

function caixaAlta(vetor) {
    let modificado = []

    for(let i = 0;i < vetor.length;i++) {
        modificado[i] = vetor[i].toUpperCase()
    }

    return modificado
}

export default {
    capitalizar: capitalizar,
    ordenar: ordenar,
    caixaAlta: caixaAlta
}
