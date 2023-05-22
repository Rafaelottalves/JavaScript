let markList = [...document.querySelectorAll('#container-mark input')]
let elemento = document.querySelector('#elementos')
let elementos = [...document.querySelectorAll('#elementos figure')]
let container = document.querySelector('#container')

let cont = 0
let pos = 0

function moveCarrossel(item, i) {
    if (i == 0 && item.classList.contains('voltando')) {
        for (let index = markList.length - 1; index >= 0; index--) {
            markList[index].classList.remove('voltando')
            markList[index].classList.remove('clicado')
        }

        cont = 0
        elemento.style.cssText = `transform: translateX(${cont}px);`
    }

    if (i == 1 && !item.classList.contains('clicado') && !item.classList.contains('voltando')) {
        markList[i - 1].classList.add('voltando')
        item.classList.add('clicado')

        cont -= elementos[1].getBoundingClientRect().left - 120
        elemento.style.cssText = `transform: translateX(${cont}px);`
    } else if (i == 1 && item.classList.contains('voltando')) {
        for (let index = markList.length - 1; index >= 1; index--) {
            markList[index].classList.remove('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont = -168
        elemento.style.cssText = `transform: translateX(${cont}px);`
    }   

    if (i == 2 && !item.classList.contains('clicado') && !item.classList.contains('voltando')) {
        for (let index = 0; index < i; index++) {
            markList[index].classList.add('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont -= elementos[2].getBoundingClientRect().left - 120
        elemento.style.cssText = `transform: translateX(${cont}px);`
    } else if(i == 2 && item.classList.contains('voltando')) {
        for(let index = markList.length-1;index >= 2;index--) {
            markList[index].classList.remove('voltando')
            markList[index].classList.remove('clicado')
        }
        
        item.classList.add('clicado')

        cont = -345
        elemento.style.cssText = `transform: translateX(${cont}px);`
    }

    if (i == 3 && !item.classList.contains('clicado') && !item.classList.contains('voltando')) {
        for (let index = 0; index < i; index++) {
            markList[index].classList.add('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont -= elementos[3].getBoundingClientRect().left - 120
        elemento.style.cssText = `transform: translateX(${cont}px);`
    } else if(i == 3 && item.classList.contains('voltando')) {
        for(let index = markList.length-1;index >= 3;index--) {
            markList[index].classList.remove('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont = -520
        elemento.style.cssText = `transform: translateX(${cont}px);`
    }

    if (i == 4 && !item.classList.contains('clicado') && !item.classList.contains('voltando')) {
        for (let index = 0; index < i; index++) {
            markList[index].classList.add('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont -= elementos[4].getBoundingClientRect().left - 120
        elemento.style.cssText = `transform: translateX(${cont}px);`
    } else if(i == 4 && item.classList.contains('voltando')) {
        for(let index = markList.length-1;index >= 4;index--) {
            markList[index].classList.remove('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont = -702
        elemento.style.cssText = `transform: translateX(${cont}px);`
    }

    if (i == 5 && !item.classList.contains('clicado') && !item.classList.contains('voltando')) {
        for (let index = 0; index < i; index++) {
            markList[index].classList.add('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont -= elementos[5].getBoundingClientRect().left - 120
        elemento.style.cssText = `transform: translateX(${cont}px);`
    } else if(i == 5 && item.classList.contains('voltando')) {
        for(let index = markList.length-1;index >= 5;index--) {
            markList[index].classList.remove('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont = -878
        elemento.style.cssText = `transform: translateX(${cont}px);`
    }

    if (i == 6 && !item.classList.contains('clicado') && !item.classList.contains('voltando')) {
        for (let index = 0; index < i; index++) {
            markList[index].classList.add('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont -= elementos[6].getBoundingClientRect().left - 120
        elemento.style.cssText = `transform: translateX(${cont}px);`
    } else if(i == 6 && item.classList.contains('voltando')) {
        for(let index = markList.length-1;index >= 6;index--) {
            markList[index].classList.remove('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont = -1053
        elemento.style.cssText = `transform: translateX(${cont}px);`
    }

    if (i == 7 && !item.classList.contains('clicado') && !item.classList.contains('voltando')) {
        for (let index = 0; index < i; index++) {
            markList[index].classList.add('voltando')
            markList[index].classList.remove('clicado')
        }

        item.classList.add('clicado')

        cont -= elementos[7].getBoundingClientRect().left - 120
        elemento.style.cssText = `transform: translateX(${cont}px);`
    }
}

markList.forEach((item, i) => {
    function clique() {
        moveCarrossel(item, i)
        pos = i
    }

    item.addEventListener('click', clique)
})

window.onload = () => {
    setInterval(() => {
        pos++

        if(pos == markList.length) {
            pos = 0
        }

        moveCarrossel(markList[pos], pos)

        markList[pos].checked = true
    }, 5000)
}
