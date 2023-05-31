let btn_left = document.querySelector('.counter div:first-child')
let btn_right = document.querySelector('.counter div:last-child')

let number_counter = document.querySelector('.number-counter p:first-child')

let img_list = [...document.querySelectorAll('.slider-items > img')]
let item_guide = [...document.querySelectorAll('.img-guide > span')]

let cont = 1
let cont_img = 27

function hoverEvt() {
    btn_left.style.cssText = `
    color: white;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.141);`
}

function leaveEvt() {
    btn_left.style.cssText = `
    color: white;
    cursor: pointer;
    background-color: transparent;`
}

function movingRight() {
    cont++
    cont_img--

    if(cont >= 28) {
        cont = 28

        btn_right.style.cssText = `
            color: gray;
            background-color: transparent;
            cursor: not-allowed;
        `
    }

    if(cont_img < 0) {
        cont_img = 0
    }

    btn_left.style.cssText = `
        color: white;
        cursor: pointer;
    `
    btn_left.addEventListener('mouseenter', hoverEvt)
    btn_left.addEventListener('mouseleave', leaveEvt)

    number_counter.innerHTML = cont
    item_guide[cont-1].style.cssText = `background-color: white;`

    img_list[cont_img].style.cssText = `z-index: ${cont_img};`
    img_list[cont_img+1].style.cssText = `z-index: 0;`
}

function movingLeft() {
    cont--
    cont_img++

    if(cont <= 1) {
        cont = 1

        btn_left.style.cssText = `
        color: gray;
        cursor: not-allowed;
        `
        btn_left.removeEventListener('mouseenter', hoverEvt)
        btn_left.removeEventListener('mouseleave', leaveEvt)
    } else if(cont <= 28) {
        btn_right.style.cssText = `
            color: white;
            cursor: pointer;
        `
    }

    if(cont_img > 27) {
        cont_img = 27
    }

    number_counter.innerHTML = cont
    item_guide[cont].style.cssText = `background-color: rgba(255, 255, 255, 0.408);`

    img_list[cont_img].style.cssText = `z-index: ${cont_img};`
    img_list[cont_img-1].style.cssText = `z-index: 0;`
}


btn_left.addEventListener('click', movingLeft)
btn_right.addEventListener('click', movingRight)

/* 
import { mvgRight, watchingCounterRight, freeBtnLeft, eventStart, changeElementsRight } from "./funçõesRight.js"
import { mvgLeft, watchingCounterLeft, changeElementsLeft } from "./funçõesLeft.js"

let btn_left = document.querySelector('.counter div:first-child')
let btn_right = document.querySelector('.counter div:last-child')

let number_counter = document.querySelector('.number-counter p:first-child')

let img_list = [...document.querySelectorAll('.slider-items > img')]
let item_guide = [...document.querySelectorAll('.img-guide > span')]

let cont = 1
let cont_img = 27

function movingRight() {
    mvgRight(cont, cont_img)

    watchingCounterRight(cont, cont_img)

    freeBtnLeft(btn_left)

    eventStart()

    changeElementsRight(number_counter, img_list, item_guide)
}

function movingLeft() {
    mvgLeft(cont, cont_img)

    watchingCounterLeft()

    changeElementsLeft()
}

btn_right.addEventListener('click', movingRight)
btn_left.addEventListener('click', movingLeft)

export { btn_left, btn_right, number_counter, img_list, item_guide, cont, cont_img }
 */
