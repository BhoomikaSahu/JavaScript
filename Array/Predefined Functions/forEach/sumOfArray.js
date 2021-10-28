const numArray = [1,2,3];

let sum = 0;
function sumOfArray(element){
    sum += element;
    
}

// let sum = 0;
// numArray.forEach(function(element, index){
//     sum += element
// })
numArray.forEach(sumOfArray)
console.log(sum)