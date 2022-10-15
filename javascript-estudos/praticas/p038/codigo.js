// Alistamento Militar
function alistamento(pessoas) {
    let nome = []
    let idade = []

    for(pos in pessoas) {
        nome.push(pessoas[pos].nome)
        idade.push(pessoas[pos].idade)
    }

    let maior = []
    let menor = []
    let igual = []

    for(pos in idade) {
        if(idade[pos] == 18) {
            igual.push(nome[pos])
        }
        else if (idade[pos] > 18) {
            maior.push(nome[pos])
        }
        else {
            menor.push(nome[pos])
        }
    }

    console.log(`Maiores de 18 anos (não precisam se alistar): [${maior}]`)
    console.log(`Menores de 18 anos (ainda não é hora de se alistar): [${menor}]`)
    console.log(`Pessoas que precisam se alistar (estão com 18 anos): [${igual}]`)
}


let cadastro = [
    {nome:'rafael', idade:18},
    {nome:'paulo', idade:16},
    {nome:'joao', idade:21},
    {nome:'fernando', idade:25},
    {nome:'miguel', idade:12},
    {nome:'bruno', idade:18},
    {nome:'leo', idade:18}
]

alistamento(cadastro)
