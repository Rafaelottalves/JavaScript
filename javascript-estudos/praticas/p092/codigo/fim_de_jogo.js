function endGame(jog, titulo) {
    let container_telaFim = document.getElementById('container-tela')
    let tela_fim = document.getElementById('tela')

    let titulo_fim = document.createElement('h2')
    titulo_fim.setAttribute('class', 'titulo-fim')
    titulo_fim.innerHTML = jog + titulo

    let btn_fim = document.createElement('button')
    btn_fim.setAttribute('class', 'btn-fim')
    btn_fim.innerHTML = 'Recomeçar'
    btn_fim.addEventListener('click', () => location.reload())

    tela_fim.appendChild(titulo_fim)
    tela_fim.appendChild(btn_fim)

    container_telaFim.style.animation = 'tela-final 1s forwards'
}

export default endGame
