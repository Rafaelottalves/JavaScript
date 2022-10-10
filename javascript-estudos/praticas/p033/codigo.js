function carregamento() {
    let config = document.getElementsByTagName('head')[0]
    let estilo = document.createElement('link')

    estilo.setAttribute('rel', 'stylesheet')
    estilo.setAttribute('href', 'style.css')

    let tela = document.querySelector('.carregamento')
    let container = document.querySelector('.container-titulo')

    let titulo = document.createElement('h1')
    titulo.setAttribute('class', 'titulo-carregamento')
    titulo.textContent = 'Carregando...'

    config.appendChild(estilo)
    container.appendChild(titulo)

    setTimeout(() => {
        container.removeChild(titulo)
        config.removeChild(estilo)
    }, 5000)
}
