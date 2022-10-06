/* função que aprova, se aprovar leva pra uma função se não aprovar leva pra outra, essa outra
retorna pra primeira função (função que aprova) caso veja que é possivel aprovar */

function aprovar(usuario) { // Verifica se é maior ou menor de idade
    if(usuario.idade >= 18) {
        return passou(usuario.nome)
    }
    else {
        return nãoPassou(usuario.nome)
    }
}

function passou(nomeUsuario) { // maior de idade: leva pra verificação de passagem
    console.log('Seus dados irão para a lista de concorrentes')

    console.log('Verificando se tem passagem pela policia...')
    return verifi(nomeUsuario)
}

function nãoPassou(nomeUsuario) { // menor de idade: verifica se a idade foi digitada errada
    console.log('Verifique se você não digitou sua idade errado')

    let confirmDados = {nome:nomeUsuario, idade:18}

    return confirmacao(confirmDados)
}

function confirmacao(dado) { // se digitou errado:leva de volta pro começo | não digitou:agradece
    if(dado.idade >= 18) {
        console.log('Parece que você realmente digitou errado, reformulando...')
        
        return aprovar(dado)
    }
    else {
        console.log(`você realmente tem menos de 18, tenha um bom dia ${dado.nome}`)
    }
}

function verifi(dado) { // Verifica a passagem
    regis = ['rafael', 'joão', 'matheus', 'leo', 'miguel', 'andrei']

    for(pos in regis) {
        if(dado == regis[pos]) {
            console.log('Você tem passagem, Resolva as suas pendencias e volte daqui uma semana')
            break
        }
        else {
            console.log('Você não tem passagem, aguarde dois dias que chamaremos')
            break
        }
    }
}

// Dados de entrada
dadosDeUsuario = {nome:'rafael', idade:18}
aprovar(dadosDeUsuario)
