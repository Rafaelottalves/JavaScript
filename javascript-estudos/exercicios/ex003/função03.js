function função1 () {
    console.log('hello world das funções')
}

função1()

function escreverNome(nome) {
    console.log(`O nome é ${nome}`)
}

escreverNome('Rafael')

var nomeDoBancoDeDados = 'Dados corrompidos'

escreverNome(nomeDoBancoDeDados)

function soma(n1, n2) {
    var soma = n1 + n2
    return soma
}

var somaUm = soma(2, 5)

console.log(somaUm)

var somaDois = soma(5, 5)

console.log(somaDois)

console.log(soma(4, 5))
