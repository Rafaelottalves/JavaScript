import modificador from "../codigo-v5/modulo.js"
import ingredientes from "../codigo-v5/conteudo.js"

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome')
let containerIngredientes = document.getElementById('container-ingredientes')

for(let ingrediente of ingredientesOrdenados) {
    let txtHtml = `
        <div class="ingrediente">
            <img src="img/${ingrediente.img}">

            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `

    containerIngredientes.innerHTML += txtHtml
}