import { agrupaMenorMaior } from "./genericos.js"
import { pessoas as conteudoPess, data as lista } from "./conteudo.js"

let pessoas = agrupaMenorMaior(conteudoPess)
console.log(pessoas)

const html = `
    <h3>maiores</h3>
    ${lista(pessoas.maiores)}
    <h3>menores</h3>
    ${lista(pessoas.menores)}
`

document.querySelector('#app').innerHTML = html
