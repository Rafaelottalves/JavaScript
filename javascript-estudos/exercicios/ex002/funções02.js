var func = () => {console.log(this.nome)}


var obj1 = {
    nome: 'objeto 1',
    f: func,
}

var obj2 = {
    nome: 'objeto 2',
    f: func,
}

obj1.f()
obj2.f()
