function calcMedia(valor) {
    let maisUm = val => val + 1
    let addUm = valor.map(maisUm)

    let acimaDaMedia = val => val >= 6
    let selAcimaDaMedia = addUm.filter(acimaDaMedia)

    let selMedia = (acc, elemento, i, arr) => {
        let soma = acc += elemento
        let media = soma / arr.length

        return media
    }
    let calcMedia = selAcimaDaMedia.reduce(selMedia)

    return calcMedia
}

let resultado = calcMedia([1, 3, 5, 7, 6])
console.log(resultado)
