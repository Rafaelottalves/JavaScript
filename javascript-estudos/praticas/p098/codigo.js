let slider = document.querySelector('.slider')
let cont = 0

document.addEventListener('wheel', (e) => {
    let direction = e.deltaY

    if(direction < 0) {
        cont += 20

        if(cont > 0) {
            cont = 0
        }
    } else {
        cont -= 20

        if(cont < -150) {
            cont = -150
        }
    }

    slider.style.cssText = `transform: translateX(${cont}%);`
})
