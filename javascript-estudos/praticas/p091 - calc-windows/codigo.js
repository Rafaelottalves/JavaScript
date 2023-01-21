//AGORA: fazer os projetos de todos os cursos (e talvez outros que não estejam)
// depois fazer desafios no codewars

const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')

const buttons = document.querySelectorAll('#buttons-container button')

class Calculator {
    constructor (previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperaton = ''
    }

    addDigit(digit) {
        if(digit === '.' && this.currentOperationText.innerText.includes('.')) {
            return
        }

        this.currentOperaton = digit
        this.updateScreen()
    }

    processOperation(operation) {
        if(this.currentOperationText.innerText === '' && operation !== 'C') {
            if(this.previousOperationText.innerText !== '') {
                this.changeOperation(operation)
            }
            return
        }

        let operationValue
        const previous = +this.previousOperationText.innerText.split(' ')[0]
        const current = +this.currentOperationText.innerText

        switch(operation) {
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break

            case '-':
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break

            case '/':
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
                
            case '*':
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break
                
            case 'DEL':
                this.processDelOperator()
                break
                
            case 'CE':
                this.processClearCurrentOperation()
                break
                
            case 'C':
                this.processClearAllOperation()
                break
                
            case '=':
                this.processEqualOperator()
                break
                
            default:
                return
        }

    }

    updateScreen(operationValue=null, operation=null, current=null, previous=null) {
        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperaton
        } else {
            if(previous === 0) {
                operationValue = current
            }

            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = ''
        }
    }

    changeOperation(operation) {
        const mathOperations = ['*', '/', '+', '-']

        if(!mathOperations.includes(operation)) {
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
    }

    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    processClearCurrentOperation() {
        this.currentOperationText.innerText = ''
    }

    processClearAllOperation() {
        this.currentOperationText.innerText = ''
        this.previousOperationText.innerText = ''
    }

    processEqualOperator() {
        const operation = previousOperationText.innerText.split(' ')[1]

        this.processOperation(operation)
    }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        const value = evt.target.innerHTML
        
        if(+value >= 0 || value === '.') {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    })
})
