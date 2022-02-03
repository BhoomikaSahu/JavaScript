const numbersArray = [10,20,37,40,5,100,324,234,45,24,4,45,12,435], evenNumbersArray=[], oddNumbersArray=[]

for(const num of numbersArray)
    if(num%2 === 0)
        evenNumbersArray.push(num)
    else    
        oddNumbersArray.push(num)

for(const num of evenNumbersArray)
    console.log(num)

for(const num of oddNumbersArray)
    console.log(num)