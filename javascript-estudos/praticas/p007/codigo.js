
function novoBtn(texto, callback) {
    const corpo = document.querySelector('body')
    const btn = document.createElement('button')
    btn.textContent = texto

    callback(btn)

    corpo.insertAdjacentElement('beforeend', btn)

    return btn
}

novoBtn('Login', (botao) => {
    botao.style.cssText = `font-size: 40px;`
    botao.addEventListener('click', () => {
        console.log('clicou!')
    })
})
novoBtn('Sign-up', (botao) => {
    botao.style.cssText = `
        font-size: 20px;
        color: red;
    `
})
