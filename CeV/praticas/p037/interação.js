function aparecer() {
    let btnM = document.getElementById('menu')
    let menu = document.getElementById('nav')

    if(btnM.checked) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}
