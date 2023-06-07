let btn_left = document.querySelector('.counter div:first-child')
let btn_right = document.querySelector('.counter div:last-child')

let number_counter = document.querySelector('.number-counter p:first-child')

let img_list = [...document.querySelectorAll('.slider-items > img')]
let item_guide = [...document.querySelectorAll('.img-guide > span')]

let cont = 1
let cont_img = 27

let iPos = 0
let iNeg = 27

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

    iPos++
    iNeg--

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

    img_list[cont_img].style.cssText = `z-index: ${cont};`
    img_list[cont_img+1].style.cssText = `z-index: 0;`
}

function movingLeft() {
    cont--
    cont_img++

    iPos--
    iNeg++

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

    img_list[cont_img].style.cssText = `z-index: ${cont};`
    img_list[cont_img-1].style.cssText = `z-index: 0;`
}

function imgGuideControl() {
    function addClickEvent(item, index) {
        function clickEvent() {
            number_counter.innerHTML = index+1

            if(iPos < index) {
                btn_left.style.cssText = `
                    color: white;
                    cursor: pointer;
                `

                btn_left.addEventListener('mouseenter', hoverEvt)
                btn_left.addEventListener('mouseleave', leaveEvt)

                while(iPos < index) {
                    item_guide[iPos+1].style.cssText = `background-color: white;`

                    if(iPos+1 == 27) {
                        btn_right.style.cssText = `
                            color: gray;
                            background-color: transparent;
                            cursor: not-allowed;
                        `
                    }

                    img_list[iNeg].style.cssText = `z-index: 0;`

                    if(iPos+1 == index) {
                        img_list[iNeg-1].style.cssText = `z-index: 2;`
                    }

                    iPos++
                    iNeg--

                    cont = iPos+1
                    cont_img = iNeg
                }
            } else if(iPos > index) {
                if(iPos == 28) {
                    iPos--
                }

                btn_right.style.cssText = `
                    color: white;
                    cursor: pointer;
                `

                while(iPos > index) {
                    item_guide[iPos].style.cssText = `background-color: rgba(255, 255, 255, 0.408);`

                    if(iPos == 1) {
                        btn_left.style.cssText = `
                            color: gray;
                            cursor: not-allowed;
                        `

                        btn_left.removeEventListener('mouseenter', hoverEvt)
                        btn_left.removeEventListener('mouseleave', leaveEvt)
                    }

                    img_list[iNeg].style.cssText = `z-index: 0;`

                    if(iPos-1 == index) {
                        img_list[iNeg+1].style.cssText = `z-index: 2;`
                    }

                    cont = iPos

                    iPos--
                    iNeg++

                    cont_img = iNeg
                }
            }
        }

        item.addEventListener('click', clickEvent)
    }

    item_guide.forEach(addClickEvent)
}

btn_left.addEventListener('click', movingLeft)
btn_right.addEventListener('click', movingRight)
imgGuideControl()
