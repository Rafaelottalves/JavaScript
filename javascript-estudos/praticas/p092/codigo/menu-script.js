let btn_menu = document.querySelector('#container-conteudo > button')

function iniciarGame() {
    document.getElementById('menu').style.display = 'none'
}

btn_menu.addEventListener('click', iniciarGame)
