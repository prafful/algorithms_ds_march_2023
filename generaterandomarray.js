let prompt = require('prompt-sync')()

let largeArray = []
console.log(`Size of largeArray: ${largeArray.length}`)
let arraySize = parseInt(prompt("Input size for the array: "))
console.log(`Size of array needed is ${arraySize}`)

for (let index = 0; index < arraySize; index++) {
    const randomNumber = Math.random()*arraySize
    let withoutDecimal = Math.floor(randomNumber)
    //console.log(withoutDecimal)
    largeArray.push(withoutDecimal)
}

console.log(`Size of largeArray: ${largeArray.length}`)
console.log(largeArray)
console.log(largeArray.toString())
