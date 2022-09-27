function aparecer() {
    let btnM = document.getElementById('menu')
    let menu = document.getElementById('nav')

    if(btnM.checked) {
        menu.style.transform = 'translateX(0px)'
        menu.style.transition = '.5s ease-in'
    } else {
        menu.style.transform = 'translateX(-230px)'
        menu.style.transition = '.5s ease-out'
    }
}
