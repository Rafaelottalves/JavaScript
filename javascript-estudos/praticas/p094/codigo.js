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
    element.addEventListener('click', (event) => {
        const currentElement = event.target
        const parentElement = currentElement.parentNode

        if(currentElement.getAttribute('src')) {
            currentElement.style.transform = "translateY(-200px)" /* O PROBLEMA É AQUI? */
            currentElement.style.transition = "transform 2s ease" /* AQUI? */

            let verifPos = setInterval(() => {
                let currentElementPosition = Math.round(currentElement.getBoundingClientRect().top)
                let parentElementTop = parentElement.offsetTop

                let disElements = (currentElementPosition - parentElementTop) * -1

                currentElement.style.clipPath = `inset(${disElements}px 0px 0px 0px)` /* AQUI? */

                if(disElements == -201) {
                    clearInterval(verifPos)
                }
            }, 24) /* AQUI? */
        }
    })
})
