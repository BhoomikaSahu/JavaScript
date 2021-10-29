const numArray = [1,2,3,4,5,6,7,8,5];

function addEven(array, evenNum){
    if(array[0]%2 !== 0){
        array.unshift(evenNum)
    }
    if(array[array.length-1]%2 !== 0)
        array.push(evenNum)

    return array;
}

addEven(numArray, 4)

for(const num of numArray)
    console.log(num)
