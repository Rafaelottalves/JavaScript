// Conferir em que linguagem esta
function funcao(lang, cb) {
    setTimeout(() => {
        console.log('Linguagem setada')

        cb(lang)
    }, 3000)
}

funcao('pt-br', (lang) => {
    if(lang == 'pt-br') {
        console.log('Pagina esta em portugues')
    }
    else {
        console.log('Pagina não esta em portugues')
    }
})
