const numArray = [1,3,4,5]

// sum of odd numbers

function sumOfEvenNum(previousvalue, currentValue, index, array){
    if(index === 1)
        if(previousvalue%2 === 0)
            previousvalue = 0;
    if(currentValue%2 !== 0)
        previousvalue += currentValue;
    
        return previousvalue;
}

evenSum = numArray.reduce(sumOfEvenNum);
console.log(evenSum);