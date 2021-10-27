const numbersArray = [10,20,30,40,50,100,324,234,45,234,239,45,12,435], evenOddArray=[]

for(let index=0; index<numbersArray.length; index++)
    if(numbersArray[index]%2 === 0)
        evenOddArray.push(numbersArray[index])

for(let index=0; index<=numbersArray.length; index++)
    if(numbersArray[index]%2 !== 0)
        evenOddArray.push(numbersArray[index])


for(let index=0; index<evenOddArray.length; index++)
    console.log(evenOddArray[index])