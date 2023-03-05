/* clicou - todos os card diminuem menos o clicado, a imagem vai indo pra cima (desaparece conforme sai do card) e atras ta um  texto */

/* 
if(!element.classList.contains('clicked')) {
        element.classList.add('not-clicked')
    }

    const currentElement = event.target
        const parentElement = currentElement.parentNode
*/

const cardList = document.querySelectorAll('.card')

cardList.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        const currentElement = event.target
        currentElement.classList.add('over-effect')
    })

    element.addEventListener('mouseout', (event) => {
        const currentElement = event.target
        currentElement.classList.remove('over-effect')
    })
})
