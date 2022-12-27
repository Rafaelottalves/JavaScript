// a.localeCompare(b) <- CODIGO NOVO

let ingredientes = ['mel', 'água', 'sal', 'mostarda']
let modificado = []

for(let i = 0;i < ingredientes.length;i++) {
    let letraIni = ingredientes[i].charAt(0).toUpperCase()
    let restoTxt = ingredientes[i].slice(1)
    let result = letraIni + restoTxt

    modificado.push(result)
}
let ordenado = modificado.sort(function(a, b) {
    return a.localeCompare(b)
})
console.log(ordenado)
