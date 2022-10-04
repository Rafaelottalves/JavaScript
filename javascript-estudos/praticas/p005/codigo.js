let voto = (anoNasc) => {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let idade = anoAtual - anoNasc

    return idade
}

console.log(voto(2004))
