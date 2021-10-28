const numArray = [1,2,3,6];

let sum = 0;
function sumOfEven(element){
    if(element%2 == 0)
        sum += element;
    
}

// let sum = 0;
// numArray.forEach(function(element, index){
//     if(element%2 == 0)
//     sum += element;
// })
numArray.forEach(sumOfEven)
console.log(sum)