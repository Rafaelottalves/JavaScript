let cx1 = document.getElementById('cx1')
let cx2 = document.getElementById('cx2')
let btns = [...document.querySelectorAll('section > div > button')]

let btn_copiar = document.getElementById('btn-copiar')

btns.map((el) => {
    el.addEventListener('click', function(evt) {
        evt.target.setAttribute('class', 'selecionado')
    })
})

btn_copiar.addEventListener('click', function() {
    let btnSelecionado = [...document.querySelectorAll('.selecionado')]
    let btnNaoSelecionado = [...document.querySelectorAll('section > div > button:not(.selecionado)')]

    btnSelecionado.map((el) => {
        cx2.appendChild(el)
    })
    btnNaoSelecionado.map((el) => {
        cx1.appendChild(el)
    })
})
