export default data => {
    return `<ul>
        ${data.map(pessoa => `<li>${pessoa.nome} - ${pessoa.idade}</li>`).join('')}
    </ul>`
}
