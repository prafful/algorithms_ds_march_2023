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
console.log("########## Unsorted ##########");
console.log(largeArray)

let startTime=new Date().getTime()
//do sorting
largeArray.sort((n1, n2)=>{
    return n1-n2
})
//
let endTime = new Date().getTime()
console.log(`Start time: ${startTime}`)
console.log(`End time: ${endTime}`)
console.log(`Time taken: ${endTime-startTime} ms for sorting.`)

console.log("########## Sorted ##########");
console.log(largeArray)

