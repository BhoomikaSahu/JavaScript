//const numArray = [32, 34, 56, 78, 39, 11, 100, 345, 44, 55]
const numArray = [9999999,10000000000]
const min = minNum(numArray)
console.log(min)
function minNum(numArray){
    let min=num
    for(let index=0; index<numArray.length; index++)
        if(numArray[index] <= min)
            min = numArray[index]
    return min
}