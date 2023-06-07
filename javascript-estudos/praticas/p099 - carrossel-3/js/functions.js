let btn_right = document.querySelector('.counter div:last-child')
let btn_left = document.querySelector('.counter div:first-child')

let number_counter = document.querySelector('.number-counter p:first-child')

let img_list = [...document.querySelectorAll('.slider-items > img')]
let item_guide = [...document.querySelectorAll('.img-guide > span')]

let cont = 1
let cont_img = 27

let iNeg = 27
let iPos = 0

/* --------------- */

function mvgRight() {
    cont++
    cont_img--

    iPos++
    iNeg--
}

function blockBtnRight() {
    btn_right.style.cssText = `
        color: gray;
        background-color: transparent;
        cursor: not-allowed;`
}

function watchingCounterRight() {
    if(cont >= 28) {
        cont = 28

        blockBtnRight()
    }

    if(cont_img < 0) {
        cont_img = 0
    }
}

function freeBtnLeft() {
    btn_left.style.cssText = `
    color: white;
    cursor: pointer;
    `
}

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

function eventStart() {
    btn_left.addEventListener('mouseenter', hoverEvt)
    btn_left.addEventListener('mouseleave', leaveEvt)
}

function changeElementsRight() {
    number_counter.innerHTML = cont
    item_guide[cont-1].style.cssText = `background-color: white;`

    img_list[cont_img].style.cssText = `z-index: ${cont_img};`
    img_list[cont_img+1].style.cssText = `z-index: 0;`
}

/* --------------- */

function mvgLeft() {
    cont--
    cont_img++

    iPos--
    iNeg++
}

function blockBtnLeft() {
    btn_left.style.cssText = `
    color: gray;
    cursor: not-allowed;
    `
}

function eventStop() {
    btn_left.removeEventListener('mouseenter', hoverEvt)
    btn_left.removeEventListener('mouseleave', leaveEvt)
}

function freeBtnRight() {
    btn_right.style.cssText = `
    color: white;
    cursor: pointer;
    `
}

function watchingCounterLeft() {
    if(cont <= 1) {
        cont = 1

        blockBtnLeft()

        eventStop()
    } else if(cont <= 28) {
        freeBtnRight()
    }

    if(cont_img > 27) {
        cont_img = 27
    }
}

function changeElementsLeft() {
    number_counter.innerHTML = cont
    item_guide[cont].style.cssText = `background-color: rgba(255, 255, 255, 0.408);`

    img_list[cont_img].style.cssText = `z-index: ${cont_img};`
    img_list[cont_img-1].style.cssText = `z-index: 0;`
}

/* --------------- */

function mvgForward() {
    iPos++
    iNeg--

    cont = iPos+1
    cont_img = iNeg
}

function mvgBackward() {
    cont = iPos

    iPos--
    iNeg++

    cont_img = iNeg
}

function imgGuideControl() {
    function addClickEvent(item, index) {
        function clickEvent() {
            number_counter.innerHTML = index+1

            if(iPos < index) {
                freeBtnLeft()

                eventStart()

                while(iPos < index) {
                    item_guide[iPos+1].style.cssText = `background-color: white;`

                    if(iPos+1 == 27) {
                        blockBtnRight()
                    }

                    img_list[iNeg].style.cssText = `z-index: 0;`

                    if(iPos+1 == index) {
                        img_list[iNeg-1].style.cssText = `z-index: 2;`
                    }

                    mvgForward()
                }
            } else if(iPos > index) {
                if(iPos == 28) {
                    iPos--
                }

                freeBtnRight()

                while(iPos > index) {
                    item_guide[iPos].style.cssText = `background-color: rgba(255, 255, 255, 0.408);`

                    if(iPos == 1) {
                        blockBtnLeft()

                        eventStop()
                    }

                    img_list[iNeg].style.cssText = `z-index: 0;`

                    if(iPos-1 == index) {
                        img_list[iNeg+1].style.cssText = `z-index: 2;`
                    }

                    mvgBackward()
                }

            }
        }

        item.addEventListener('click', clickEvent)
    }

    item_guide.forEach(addClickEvent)
}

/* --------------- */

export { mvgRight, watchingCounterRight, freeBtnLeft, eventStart, changeElementsRight, mvgLeft, watchingCounterLeft, changeElementsLeft, btn_right, btn_left, imgGuideControl }
