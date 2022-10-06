setInterval(msg, 7000)

function msg() {
    let conteudo = document.getElementById('conteudo')

    let hora = new Date().getHours()
    let minuto = new Date().getMinutes()

    conteudo.innerHTML = `Agora são ${hora}:${minuto}`
}
