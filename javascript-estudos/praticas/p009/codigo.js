const inserirNome = (cb) => {
    let nome = 'rafael'
    cb(nome)
}

const meuNome = (nome) => {
    console.log(`Olá ${nome}`)
}

inserirNome(meuNome)
