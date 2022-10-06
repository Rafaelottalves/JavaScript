let container = document.querySelector('.container-conteudo')
let card = document.querySelector('.card-foco')
card.style.display = 'none'

container.addEventListener('mouseover', () => {
    card.style.display = 'block'
})

container.addEventListener('mouseout', () => {
    card.style.display = 'none'
})
