// forEach():-
// The forEach() method calls a function (a callback function) once for each array element.

const array = [11,22,33,44,55];

function printArray(element){
    console.log(element);
    // return element; -> It will not work for forEach method
}



let returnForEach = array.forEach(printArray);
console.log(returnForEach);                         // we can't return values that's why it is printing undefined

// console.log(array.forEach(printArray))