import * as components from "./index.js"
import { pessoas as conteudoPess } from "./pessoas.js"

let pessoas = components.agrupaMenorMaior(conteudoPess)
console.log(pessoas)

const html = `
    <h3>maiores</h3>
    ${components.lista(pessoas.maiores)}
    <h3>menores</h3>
    ${components.lista(pessoas.menores)}
`

document.querySelector('#app').innerHTML = html
