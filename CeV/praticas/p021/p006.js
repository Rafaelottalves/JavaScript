num = [1, 2, 3, 4, 5]
par = []
imp = []

for(let c = 0;c < num.length;c++) {
    if(num[c] % 2 == 0) {
        par.push(num[c])
    } else {
        imp.push(num[c])
    }
}

console.log(num)
console.log(par)
console.log(imp)
