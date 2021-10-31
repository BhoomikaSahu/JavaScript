const numbersArray = [10,20,30,40,51,100,323,234,45,234,234,45,12,435]

for(const num of numbersArray)
{
    if(num%2 === 0)
        console.log(num, " is even")
    else
        console.log(num, " is odd")

}