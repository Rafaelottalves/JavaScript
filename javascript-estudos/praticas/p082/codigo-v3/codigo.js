import modificador from "./modulo-v3.js"

let ingredientes = ['mel', 'água', 'sal', 'mostarda']

let resCap = modificador.capitalizar(ingredientes)
let resOrd = modificador.ordenar(resCap)
let resCA = modificador.caixaAlta(ingredientes)

console.log(resCap)
console.log(resOrd)
console.log(resCA)
