let btn_left = document.querySelector('.counter div:first-child')
let btn_right = document.querySelector('.counter div:last-child')

let number_counter = document.querySelector('.number-counter p:first-child')

let img_list = [...document.querySelectorAll('.slider-items > img')]
let item_guide = [...document.querySelectorAll('.img-guide > span')]

let cont = 1

function movingRight() {
    cont++

    if(cont < 1) {
        cont = 1
    } else if(cont > 28) {
        cont = 28
    }

    number_counter.innerHTML = cont
    item_guide[cont-1].style.cssText = `background-color: white;`
    
}


/* btn_left.addEventListener('click', movingLeft) */
btn_right.addEventListener('click', movingRight)
