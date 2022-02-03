// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

const array = [11,22,33,44,55];

function printArray(element){
    if(element%2 == 0)
        return element;
    // console.log(element);        
    // return element;              // It will return each values 
}

let returnMap = array.map(printArray);
console.log(returnMap);                     // It will print array    
