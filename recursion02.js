let prompt = require('prompt-sync')()

let n = parseInt(prompt("Input number n: ")) 
let counter = 0
let sum = 0                     //0

function sumtilln(tilln) {      //5,        4
    console.log(counter++)
    if(tilln < 1){              //false     false
        return tilln
    }
    sum = tilln + sumtilln(tilln-1)   //sum = sum + f(4), sum = sum  + f(3)
    return sum
    

}

console.log(sumtilln(n))        //5