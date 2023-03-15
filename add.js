let prompt = require('prompt-sync')()

//input at command prompt is always string
//convert string to number
let n1 = parseInt(prompt("Input number n1: "))
let n2 = parseInt(prompt("Input number n2: "))

// n1 = 10
// n2 = 20

let total = n1 + n2
console.log(total)