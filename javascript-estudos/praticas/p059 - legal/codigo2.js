/* 
function isSortedAndHow(array) {
    let validadorCres = []
    let validadorDecr = []
    let valid = ''

    if(array == '' || array == null || array == undefined || array == NaN) {
        valid = 'no'
    } else {
        for(let i = 1;i < array.length;i++) {
            if(array[i] > array[i-1]) {
                validadorCres.push(true)
            } else {
                validadorCres.push(false)
            }
    
            if (array[i] < array[i-1]){
                validadorDecr.push(true)
            } else {
                validadorDecr.push(false)
            }
        }
    }

    if(validadorCres.indexOf(false) == -1) {
        valid = 'yes, ascending'
    } else {
        if(validadorDecr.indexOf(false) == -1) {
            valid = 'yes, descending'
        } else {
            valid = 'no'
        }
    }

    return valid
}

console.log(isSortedAndHow())
*/

/* 
var filterString = function(value) {
    let num = ''

    for(let i = 0;i < value.length;i++) {
        if(value[i] == '0' || value[i] == '1' || value[i] == '2' || value[i] == '3' || value[i] == '4' || value[i] == '5' || value[i] == '6' || value[i] == '7' || value[i] == '8' || value[i] == '9') {
            num += value[i]
        }
    }

    return Number(num)
}

console.log(filterString('a1b2c3'))
*/

/* 
function flyBy(lamps, drone){

    result = ''
    
    for(let i = 0;i < drone.length;i++) {
        if(lamps[i] == 'x') {
            result += 'o'
        } else if(lamps[i] == 'o') {
            result += 'x'
        }
    }

    for(let i = drone.length;i < lamps.length;i++) {
        result += lamps[i]
    }

    return result
}

console.log(flyBy('xxxxxx', '====T'))
 */

/* 
function wordsToMarks(string){
    let numeros = []
    let soma = 0

    for(let i = 0;i < string.length;i++) {
        if(string[i] == 'a') {numeros.push(1)}
        else if(string[i] == 'b') {numeros.push(2)}
        else if(string[i] == 'c') {numeros.push(3)}
        else if(string[i] == 'd') {numeros.push(4)}
        else if(string[i] == 'e') {numeros.push(5)}
        else if(string[i] == 'f') {numeros.push(6)}
        else if(string[i] == 'g') {numeros.push(7)}
        else if(string[i] == 'h') {numeros.push(8)}
        else if(string[i] == 'i') {numeros.push(9)}
        else if(string[i] == 'j') {numeros.push(10)}
        else if(string[i] == 'k') {numeros.push(11)}
        else if(string[i] == 'l') {numeros.push(12)}
        else if(string[i] == 'm') {numeros.push(13)}
        else if(string[i] == 'n') {numeros.push(14)}
        else if(string[i] == 'o') {numeros.push(15)}
        else if(string[i] == 'p') {numeros.push(16)}
        else if(string[i] == 'q') {numeros.push(17)}
        else if(string[i] == 'r') {numeros.push(18)}
        else if(string[i] == 's') {numeros.push(19)}
        else if(string[i] == 't') {numeros.push(20)}
        else if(string[i] == 'u') {numeros.push(21)}
        else if(string[i] == 'v') {numeros.push(22)}
        else if(string[i] == 'w') {numeros.push(23)}
        else if(string[i] == 'x') {numeros.push(24)}
        else if(string[i] == 'y') {numeros.push(25)}
        else if(string[i] == 'z') {numeros.push(26)}
    }

    for(let i = 0;i < numeros.length;i++) {
        soma += numeros[i]
    }

    return soma
}
*/

/* 
function likeOrDislike(buttons) {
    estado = 'nothing'

    for(let i of buttons) {
        if(i === estado) {
            estado = 'nothing'
        } else {
            estado = i
        }
    }

    return estado
}

let res = likeOrDislike(['like', 'like', 'dislike', 'dislike'])
console.log(res)

*/

/* 
function removeRotten(bagOfFruits){
    let frutas = []

    if(bagOfFruits == '' || bagOfFruits == undefined || bagOfFruits == null) {
        return []
    } else {
        for(let i of bagOfFruits) {
            if(i[5] == 'n') {
                let f = i.slice(6)
                frutas.push(f.toLowerCase())
            } else {
                frutas.push(i.toLowerCase())
            }
        }
    }

    return frutas
}

console.log(removeRotten(["rottenapple","rottenbanana","kiwi","melone","orange"]))
*/

/* 
function removeRotten(bagOfFruits){
    let frutas = []

    if(bagOfFruits == '' || bagOfFruits == undefined || bagOfFruits == null) {
        return []
    } else {
        for(let i of bagOfFruits) {
            if(i[5] == 'n') {
                let f = i.slice(6)
                frutas.push(f)
            } else {
                frutas.push(i)
            }
        }
    }

    let arr1 = []
    let arr2 = []
    let arr3 = []

    for(let el of frutas) {
        arr1.push(el[0].toUpperCase())
    }

    for(let el of frutas) {
        arr2.push(el.slice(1))
    }

    for(let c = 0;c < arr1.length;c++) {
        arr3.push(arr1[c]+arr2[c])
    }

    return arr3
}

console.log(removeRotten(["rottenapple","rottenbanana","kiwi","melone","orange"]))
*/

/* 
function getMiddle(s) {
    for(let i = 0;i < s.length;i++) {
        if(s.length % 2 == 0) {
            let res = s[s.length / 2-1]+s[s.length / 2]
            return res
        } else {
            let res = s[s.length / 2 + .5 - 1]
            return res
        }
    }
}

console.log(getMiddle('middle'))
*/

