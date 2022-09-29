function maior(valor) {
    let valMai = valor + 1

    return valMai
}

function menor(valor) {
    let valMen = valor - 1

    return valMen
}

let valEnt = 5
let mai = maior(valEnt)
let men = menor(valEnt)

console.log(`O sucessor de ${valEnt} é ${mai} e o antecessor é ${men}`)
