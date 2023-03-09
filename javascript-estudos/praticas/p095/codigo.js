/* bibliotecas nativas js */
/* o que é, como funciona 
estudar XML igual json?*/
/* THROWS/THROW, VOID
O QUE AJAX? AJAX */
/* pegar tudo do site, organizar, deixar o menor e melhor possivel depois fazer isso com outro site e no final comparar os dois, deixar um tirar outro ou juntar os dois */
/* organizar diminuir resumir cada topico, depois comparar os topicos tentar juntalos ou deleta-los pegar o mais importante, excluir o repetido */
/* no final eu fazer o que eu acho que é json... */

fetch("./dados.json").then((response) => {
    response.json().then((dados) => {
        console.log(dados)
    })
})
