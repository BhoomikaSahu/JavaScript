const numArray = [32, 34, 56, 78, 39, 11, 100, 345, 44, 55]
let max = maxNum(numArray)
console.log(max)
function maxNum(numArray){
    let max=0
    for(let index=0; index<numArray.length; index++)
        if(numArray[index] >= max)
            max = numArray[index]
    return max
}