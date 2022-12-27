function capitalizarNovo(colecao, atributo) {
    if(typeof colecao[0] == 'object') {
        let result = colecao.map(function(obj) {
            let letraIni = obj[atributo].charAt(0).toUpperCase()
            let restoTxt = obj[atributo].slice(1)

            obj[atributo] = letraIni + restoTxt
            return obj
        })

        console.log(result)
    }

    else {
        let result = colecao.map(function(item) {
            let letra = item[0].toUpperCase()
            let resto = item.slice(1)
            return letra + resto
        })

        console.log(result)
    }
}

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

export default {
    capitalizar: capitalizar,
    capitalizarNovo: capitalizarNovo,
    ordenar: ordenar,
}


/*
for(let obj of colec) {
        let nome = Object.values(obj)[0]
        let letraIni = nome[0].toUpperCase()
        let restoTxt = nome.slice(1)

        obj.nome = letraIni + restoTxt
    }

    return colec  */

