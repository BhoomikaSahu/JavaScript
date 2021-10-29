const num1 = [32, 34, 56, 78, 39, 11, 100], num2 = [1, 2, 3, 4, 5, 5]
let mergedArray = [] 
mergedArray = merge(num1, num2)
for(let index=0; index<mergedArray.length; index++)
    console.log(mergedArray[index])

function merge(num1, num2){
    const num3=[]
    for(let i=0; i<num1.length; i++)
        num3.push(num1[i])
    for(let i=0; i<num2.length; i++)
        num3.push(num2[i])

    return num3
}
