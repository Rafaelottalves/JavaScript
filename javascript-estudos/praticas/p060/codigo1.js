// (function() {
    let str = 'Hoje é 26/02/2018 e amanha será 27/02/18. Meu aniversario é 1/01'
    let meses = ['jan', 'fev', 'mar', 'abril', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

    function formatData(str) {
        let dia = ''
        let regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g
        str.replace(regex, function(reg, g1, g2, g3, p, st) {
            debugger
            return 'xxxx'
        })
    }

    formatData(str)
// })()
