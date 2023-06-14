const btn_list = [...document.querySelectorAll('.container-topicos > ul > li')]
const container_img_list = [...document.querySelectorAll('.container-img-portfolio > div')]
const portfolioImg = document.querySelector('.container-img-portfolio')

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
    portfolioImg.style.height = '1080px'
    
    container_img_list.forEach((containerImg, index) => {
        containerImg.style.cssText = ``
    })
}

function appFilter() {
    portfolioImg.style.height = '540px'
    
    container_img_list.forEach((containerImg, index) => {
        if(index == 0) {
            containerImg.style.cssText = `top: 0px; left: 0px;`
        }

        else if(index == 2) {
            containerImg.style.cssText = `left: 379.5px;`
        }
        
        else if(index == 5) {
            containerImg.style.cssText = `top: 0px; left: 759px;`
        }
        
        else {
            containerImg.style.cssText = `opacity: 0; transform: scale(0.001);`
        }
    })
}

function cardFilder() {
    portfolioImg.style.height = '240px'

    container_img_list.forEach((containerImg, index) => {
        if(index == 3) {
            containerImg.style.cssText = `top: 0px; left: 0px;`
        }

        else if(index == 6) {
            containerImg.style.cssText = `top: 0px; left: 379.5px;`
        }

        else if(index == 7) {
            containerImg.style.cssText = `top: 0px; left: 759px;`
        }

        else {
            containerImg.style.cssText = `opacity: 0; transform: scale(0.001);`
        }
    })
}

function webFilter() {
    portfolioImg.style.height = '540px'

    container_img_list.forEach((containerImg, index) => {
        if(index == 1) {
            containerImg.style.cssText = `top: 0px; left: 0px;`
        }

        else if(index == 4) {
            containerImg.style.cssText = `top: 0px; left: 379.5px;`
        }

        else if(index == 8) {
            containerImg.style.cssText = `top: 0px; left: 759px;`
        }

        else {
            containerImg.style.cssText = `opacity: 0; transform: scale(0.001);`
        }
    })
}

function elementFilter(index) {
    if(index == 0) {
        allFilter()
    }

    else if(index == 1) {
        appFilter()
    }

    else if(index == 2) {
        cardFilder()
    }

    else if(index == 3) {
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
