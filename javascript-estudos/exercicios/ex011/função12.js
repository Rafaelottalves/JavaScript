function gerarTab(valor) {
    let conta = ''

    for(let c = 1;c <= 10;c++) {
        conta += `${valor} x ${c} = ${valor * c}\n`
    }

    return conta
}

let val = 5
let result = gerarTab(val)
console.log(result)
