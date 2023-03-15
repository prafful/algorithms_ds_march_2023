let prompt = require('prompt-sync')()

let n = prompt("How many time do you want to run the loop? ")
console.log(n)
let loopCount = n

let startTime=new Date().getTime()
while (n>0) {
    n--    
}
let endTime = new Date().getTime()
console.log(`Start time: ${startTime}`)
console.log(`End time: ${endTime}`)
console.log(`Time taken: ${endTime-startTime} ms for ${loopCount} loops.`);
