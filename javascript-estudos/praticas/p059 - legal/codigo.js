let validador1 = false
let validador2 = false
let validador3 = false


function  marca1() {
    validador1 = true
    validador2 = false
    validador3 = false
}

function  marca2() {
    validador2 = true
    validador1 = false
    validador3 = false
}

function  marca3() {
    validador3 = true
    validador1 = false
    validador2 = false
}

let container1 = document.querySelector('.ctn-1')
let container2 = document.querySelector('.ctn-2')
let container3 = document.querySelector('.ctn-3')

function expandir() {
    if(validador1) {
        container1.style.cssText = `width: 400px;`
        container2.style.cssText = `width: 60px;`
        container3.style.cssText = `width: 60px;`
    }

    else if(validador2) {
        container1.style.cssText = `width: 60px;`
        container2.style.cssText = `width: 400px;`
        container3.style.cssText = `width: 60px;`
    }

    else if(validador3) {
        container1.style.cssText = `width: 60px;`
        container2.style.cssText = `width: 60px;`
        container3.style.cssText = `width: 400px;`
    }
}

function retrair() {
    container1.style.cssText = `width: 60px;`
    container2.style.cssText = `width: 60px;`
    container3.style.cssText = `width: 60px;`
}
