// a.localeCompare(b) <- CODIGO NOVO

let ingredientes = ['mel', 'água', 'sal', 'mostarda']

function capitalizar(ingredientes) {
    let modificado = []

    for(let i = 0;i < ingredientes.length;i++) {
        let letraIni = ingredientes[i].charAt(0).toUpperCase()
        let restoTxt = ingredientes[i].slice(1)
        let result = letraIni + restoTxt
    
        modificado.push(result)
    }

    return modificado
}

function ordenar(ingredientes) {
    return ingredientes.sort(function(a, b) {
        return a.localeCompare(b)
    })
}

let resCap = capitalizar(ingredientes)
let resOrd = ordenar(resCap)

console.log(resCap)
console.log(resOrd)
