/*
1. Consider an array
2. I assume at first element is sorted
3. Pick a next element, compare it with first element

*/

let scores = [12,56,11,5,87,47,63,8]
console.log(scores)

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

console.log(insertionSort(scores))