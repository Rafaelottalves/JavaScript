let cadastro = {nome: [], idade: []}
let res = document.getElementById('res')

cont = 's'

while(cont == 's') {
    cadastro.nome.push(prompt('Nome'))
    cadastro.idade.push(prompt('Idade'))

    cont = prompt('Continuar?')
}


for(let c = 0;c < cadastro.nome.length;c++) {
    res.innerHTML += `${cadastro.nome[c]} - ${cadastro.idade[c]} <br>`
}
