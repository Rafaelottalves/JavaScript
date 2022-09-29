
function calcular(val1, val2) {
    let area = val1 * val2
    let litros = area / 2

    let res = `sua parede tem a dimensão de ${val1}x${val2} e sua area é de ${area}m². Para pintar essa parede, você precisará de ${litros}l de tinta.`

    return res
}

let larg = 2.5
let alt = 1.75

let resultado = calcular(larg, alt)
console.log(resultado)
