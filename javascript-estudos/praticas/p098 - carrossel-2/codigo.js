let slider = document.querySelector('.slider')
let progressBar = document.querySelector('.progress-bar div')
let counterList = document.querySelector('.counter-list')

let cont = 0
let progressCount = 0
let counter = 0

document.addEventListener('wheel', (e) => {
    let direction = e.deltaY

    if(direction < 0) {
        cont += 10

        if(cont > 0) {
            cont = 0
        }
    } else {
        cont -= 10

        if(cont < -150) {
            cont = -150
        }
    }

    if(direction < 0) {
        progressCount -= 14
        counter += 5

        if(progressCount < 0) {
            progressCount = 0
            counter = -5
        }
    } else {
        progressCount += 14
        counter -= 5.33

        if(progressCount >= 200) {
            progressCount = 200
            counter = -79.949
        }
    }

    slider.style.cssText = `transform: translateX(${cont}%);`

    progressBar.style.cssText = `transform: translateX(${progressCount}%);`

    counterList.style.cssText = `transform: translateX(${counter}%);`
})
