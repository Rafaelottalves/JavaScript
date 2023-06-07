import { mvgRight, watchingCounterRight, freeBtnLeft, eventStart, changeElementsRight, mvgLeft, watchingCounterLeft, changeElementsLeft, btn_right, btn_left, imgGuideControl } from "./functions.js"

function movingRight() {
    mvgRight()

    watchingCounterRight()

    freeBtnLeft()

    eventStart()

    changeElementsRight()
}

function movingLeft() {
    mvgLeft()

    watchingCounterLeft()

    changeElementsLeft()
}

imgGuideControl()

btn_right.addEventListener('click', movingRight)
btn_left.addEventListener('click', movingLeft)
