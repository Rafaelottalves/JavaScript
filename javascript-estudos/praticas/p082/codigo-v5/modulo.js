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

function ordenar(colecao, attr) {
    return attr ? colecao.sort(function(a,b) {
        return typeof a[attr] == 'number' ? a[attr] - b[attr] : a[attr].localeCompare(b[attr])
    }) : 
    colecao.sort(function(a,b) {
        return typeof a == 'number' ? a - b : a.localeCompare(b)
    })
}

export default {
    capitalizar: capitalizar,
    ordenar: ordenar,
}
