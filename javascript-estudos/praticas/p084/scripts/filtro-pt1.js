const btn_list = [...document.querySelectorAll('.container-topicos > ul li')]
const img_list = [...document.querySelectorAll('.container-img-portfolio > img')]

function btnSelection(element, index) {
    let btn_list_length = btn_list.length-1

    element.classList.add('selecionado')

    for(let i = 0;i < index;i++) {
        btn_list[i].classList.remove('selecionado')
    }

    for(let i = btn_list_length;i > index;i--) {
        btn_list[i].classList.remove('selecionado')
    }
}

function allFilter() {
    img_list.forEach((img, index) => {
        img.style.cssText = `display: block;`
    })
}

function appFilter() {
    img_list.forEach((img, index) => {
        if(index != 0 && index != 2 && index != 5) {
            img.style.cssText = `display: none;`
        } else {
            if(index == 0) {
                img.style.cssText = `
                    height: 353.557px;
                `
                console.log(img)
            } else if(index == 2) {
                img.style.cssText = `
                    grid-column: 2 / 3;
                    grid-row: 1 / 2;
                `
            } else if(index == 5) {
                img.style.cssText = `
                    height: 552.800px;
                    grid-column: 3 / 4;
                    grid-row: 1 / 6;
                `
            }
        }
    })
}

function cardFilder() {
    img_list.forEach((img, index) => {
        if(index != 3 && index != 6 && index != 7) {
            img.style.cssText = `display: none;`
        } else {
            if(index == 3) {
            img.style.cssText = `
                grid-column: 1 / 2;
                grid-row: 1 / 2;

                transform: none;
            `
            } else if(index == 6) {
            img.style.cssText = `
                grid-column: 2 / 3;
                grid-row: 1 / 2;

                transform: none;
            `
            } else if(index == 7) {
            img.style.cssText = `
                grid-column: 3 / 4;
                grid-row: 1 / 2;

                transform: none;
            `
            }
        }
    })
}

function webFilter() {
    img_list.forEach((img, index) => {
        if(index != 1 && index != 4 && index != 8) {
            img.style.cssText = `display: none;`
        } else {
            if(index == 1) {
                img.style.cssText = `
                    grid-column: 1 / 2;
                    grid-row: 1 / 2;
                `
            } else if(index == 4) {
                img.style.cssText = `
                    height: 555px;
                    grid-column: 2 / 3;
                    grid-row: 1 / 5;
                `
            } else if(index == 8) {
                img.style.cssText = `
                    height: 280px;
                    grid-column: 3 / 4;
                    grid-row: 1 / 2;
                `
            }
        }
    })
}

function elementFilter(index) {
    if(index == 0) {
        allFilter()
    } else if(index == 1) {
        appFilter()
    } else if(index == 2) {
        cardFilder()
    } else if(index == 3) {
        webFilter()
    }
}

btn_list.forEach((btn, index) => {
    btn.addEventListener('click', (item) => {
        const element = item.target

        btnSelection(element, index)

        elementFilter(index)
    })
})
