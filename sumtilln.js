let prompt = require('prompt-sync')()

let n = parseInt(prompt("Input number n: "))

let sum = 0
//let counter = n

while(n > 0){
    sum += n
    n--
}
console.log(sum)