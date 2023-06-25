import {showWarning, inputCheck} from "./functions.js"

const sendBtn = document.querySelector('.container-send-btn > button')

const inputList = [...document.querySelectorAll('.form input')]

let state = false
const emailInputValidation = /@.+/i

function verifyFields(event) {
    state = false

    const warningContainerList = [...document.querySelectorAll('.warning-container')]
    const warningMessageList = [...document.querySelectorAll('.warning-container > .descrição')]

    for(let index = 0; index <= inputList.length-1; index++) {
        const currentInput = inputList[index]
        const currentInputValue = inputList[index].value

        const currentWarningContainer = warningContainerList[index]
        const currentContainerMessage = warningMessageList[index]

        if(currentInputValue == "") {
            showWarning(currentWarningContainer, currentContainerMessage, "Preencha corretamente este campo")
            state = true
            event.preventDefault()

            break
        }

        if(currentInput.type == "email" && currentInputValue != "" && !emailInputValidation.test(currentInputValue)) {
            showWarning(currentWarningContainer, currentContainerMessage, "Adicione o @ e o serviço utilizado")
            state = true
            event.preventDefault()

            break
        }

        if(currentInput.type == "password" && currentInputValue != "" && currentInputValue.length < 8) {
            showWarning(currentWarningContainer, currentContainerMessage, "Aumente a senha para 8 ou mais caracteres")
            state = true
            event.preventDefault()

            break
        }

        if(currentInput.placeholder == "Confirmação" && currentInputValue != inputList[2].value && currentInputValue.length >= 8) {
            showWarning(currentWarningContainer, currentContainerMessage, "A confirmação da senha esta errada")
            state = true
            event.preventDefault()

            break
        }
    }
}

inputList.forEach((item) => {
    function verification(event) {
        const inputElement = event.target

        if(state) {
            if(
                inputElement.type == "email" && !emailInputValidation.test(inputElement.value) ||
                inputElement.placeholder == 'Senha' && inputElement.value.length < 8 || 
                inputElement.placeholder == 'Confirmação' && inputElement.value != inputList[2].value
            ) {
                inputCheck(inputElement, true)
            } 
            
            else {
                inputCheck(inputElement, false)
            }
        }
    }

    item.addEventListener('keyup', verification)
})

sendBtn.addEventListener('click', verifyFields)
