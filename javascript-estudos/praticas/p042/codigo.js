function mudarTema() {
    tema = document.querySelector(".container-tema")
    botaoCheck = document.querySelector("input#check ")

    if(botaoCheck.checked) {
        tema.style.background = 'white'
    } else {
        tema.style.background = 'black'
    }
}
