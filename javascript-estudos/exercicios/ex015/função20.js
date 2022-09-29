function formatar(nome) {
    let mai = nome.toUpperCase()
    let men = nome.toLowerCase()

    let junto = nome.replace(/\s/g, '')
    let quant = junto.length

    let primNome = 0
    let prim = ''
    for(let c = 0;c < nome.length;c++) {
        if(nome[c] == ' ') {
            break
        }
        primNome ++
        prim += nome[c]
    }

    return `Nome em caixa alta: ${mai}\nNome em caixa baixa: ${men}\nTem ao todo ${quant} letras\nO primeiro nome tem ${primNome} letras, é ${prim}`
}

let resultado = formatar('joao cardoso')
console.log(resultado)
