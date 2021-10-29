const numArray = [32, 34, 56, 78, 39, 11, 100, 345, 44, 55]
let key = 44

function findIndex(numArray, key){
    for(let index=0; index<numArray.length; index++)
        if(numArray[index] === key)
            return index;
    return -1;
}
 
console.log(findIndex(numArray, key))