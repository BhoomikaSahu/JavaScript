const numArray = [2,2,4,5]

// sum of even numbers

function sumOfEvenNum(previousvalue, currentValue, index, array){
    if(index === 1)
        if(previousvalue%2 !== 0)
            previousvalue = 0;
    if(currentValue%2 === 0)
        previousvalue += currentValue;
    
        return previousvalue;
}

evenSum = numArray.reduce(sumOfEvenNum);
console.log(evenSum);