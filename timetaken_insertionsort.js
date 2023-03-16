let prompt = require('prompt-sync')()

let largeArray = []
let sortedLargeArray = []

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

//define insertion sort
let insertionSort=(values)=>{

    //run the loop and select the element at position 1
    for (let i = 1; i < values.length; i++) {
        let currentValue = values[i]
        let inside

        //loop from left to right
        //start from index i - 1 to index 0
        for(inside = i-1; inside >= 0 && values[inside]>currentValue; inside--){
            //till values[inside] is greater than current value
            //move values[inside] to the right at position values[inside + 1]
            values[inside+1]=values[inside]
        }
        //place the current value at index 0
        //or next smaller element
        values[inside+1]=currentValue

        
    }
    return values
    

}


//do sorting
sortedLargeArray = insertionSort(largeArray)
//
let endTime = new Date().getTime()
console.log(`Start time: ${startTime}`)
console.log(`End time: ${endTime}`)
console.log(`Time taken: ${endTime-startTime} ms for sorting.`)

console.log("########## Sorted ##########");
console.log(sortedLargeArray)

