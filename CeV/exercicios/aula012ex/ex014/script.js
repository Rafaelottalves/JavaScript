function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')

    var corpo = document.getElementById('body')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.style.backgroundImage = 'url(./img/manha.jpg)'
        corpo.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.style.backgroundImage = 'url(./img/tarde.jpg)'
        corpo.style.background = '#b9846f'
    } else {
        img.style.backgroundImage = 'url(./img/noite.jpg)'
        corpo.style.background = '#191D27'
    }
}
