// print even number 
const array = [11,22,33,44,55];

function printArray(element){
    if(element%2 == 0)
        console.log(element)
}

array.forEach(printArray);
