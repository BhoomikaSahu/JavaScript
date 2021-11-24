// The filter() method creates a new array with array elements that passes a test.

const array = [11,22,33,44,55,66,77,88];

function printArray(element){
    if(element%2 == 0)
        return element;            //-> It will return those values what we want
}

console.log(array.filter(printArray));               // It will print array

let returnForEach = array.filter(printArray);
console.log( returnForEach);                         // It will print array