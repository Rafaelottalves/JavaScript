// function precoImposto(imp, preco) {
//     return preco * (1 + imp)
// }

// // RJ
// console.log(precoImposto(0.11, 56.78))
// console.log(precoImposto(0.11, 12.33))



function precoImposto2(imposto) {
    function calcular(preco) {
        return preco * (1 + imposto)
    }
    return calcular
}

// RJ
const precoImpostoRj = precoImposto2(0.11)

console.log(precoImpostoRj(56.78))
console.log(precoImpostoRj(12.33))
