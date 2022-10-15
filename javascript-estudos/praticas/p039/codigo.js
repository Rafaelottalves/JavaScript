// map - filter - reduce

function verif(arr) {
    let mais = arr.map(val => val + 1)

    let selecao = mais.filter(val => val >= 6)
    
    let media = selecao.reduce((acc, val, i, arr) => {
        let soma = acc += val
        return soma / arr.length
    })

    return media
}

let resultado = verif([1, 3, 5, 7, 6])
console.log(`A media das pessoas que ficaram acima de 6 foi ${resultado}`)
