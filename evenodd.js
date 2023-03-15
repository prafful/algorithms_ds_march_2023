let prompt = require('prompt-sync')()

let n = parseInt(prompt("Input number n: "))

// if (n%2===0) {
//     console.log(`${n} is even`)
// }else{
//     console.log(`${n} is odd`)
// }

// let output = n%2===0?`${n} is even`:`${n} is odd`
// console.log(output)

console.log(n%2===0?`${n} is even`:`${n} is odd`)