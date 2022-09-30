(() => {
    function person() {
        this.idade = 0

        setInterval(function() {
            this.idade ++
            console.log('Qual this?', this)
            console.log('Qual é a idade?', this.idade)
        }, 1000)
    }

    const p1 = new person()
})()
