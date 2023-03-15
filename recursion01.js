let prompt = require('prompt-sync')()

let n = parseInt(prompt("Input number n: "))

//print message n times -> non-recursive way
// function printMessage(times){
//     while(times>0){
//         console.log(`Hello Print ${times}`)
//         times--
//     }
// }

//print message n times -> recursive way

function printMessage(times){  //5
    if(times<1){
        return times
    }
    console.log(`Hello Print ${printMessage(times-1)}`)
    return times
}

printMessage(n)
