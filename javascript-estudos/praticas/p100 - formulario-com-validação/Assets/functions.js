function showWarning(warning, messageContainer, message) {
    messageContainer.innerHTML = message
    warning.style.cssText = `z-index: 1;`

    setTimeout(() => {
        warning.style.cssText = `z-index: -1;`
        messageContainer.innerHTML = ""
    }, 2000)
}

function inputCheck(inputElement, inputState) {

    if(inputState) {
        inputElement.style.cssText = `border: 2px solid red;`
    }

    else {
        inputElement.style.cssText = `border: 2px solid green;`

        setTimeout(() => {
            inputElement.style.cssText = `border: none;`
        }, 1000)
    }
}

export {showWarning, inputCheck}
