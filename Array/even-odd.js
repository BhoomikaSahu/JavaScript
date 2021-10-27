const numbersArray = [10,20,30,40,50,100,324,234,45,234,234,45,12,435], evenNumbersArray=[], oddNumbersArray=[]

for(let index=0; index<numbersArray.length; index++)
{
    if(numbersArray[index]%2 === 0)
        evenNumbersArray.push(numbersArray[index])
    else    
        oddNumbersArray.push(numbersArray[index])
}
// for(let index=0; index<evenNumbersArray.length; index++)
//     console.log(evenNumbersArray[index])

for(let index=0; index<oddNumbersArray.length; index++)
    console.log(oddNumbersArray[index])


