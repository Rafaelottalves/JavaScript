export const pessoas = [
    {nome: 'rafael', idade: 12},
    {nome: 'joao', idade: 19},
    {nome: 'maria', idade: 15},
    {nome: 'roberta', idade: 43},
    {nome: 'josé', idade: 11}
]

export const data = data => {
    return `<ul>
        ${data.map(pessoa => `<li>${pessoa.nome} - ${pessoa.idade}</li>`).join('')}
    </ul>`
}
