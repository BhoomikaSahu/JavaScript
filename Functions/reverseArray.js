const numArray = [32, 34, 56, 78, 39, 11, 100, 345, 44, 55]
let revArray = []

revArray = reverseArray(numArray)

for(let i=0; i<revArray.length; i++)
    console.log(revArray[i])

// function reverseArray(numArray, rev){
//     for(let index=numArray.length-1; index>-1; index--)
//         rev.push(numArray[index])
    
//     return rev
// }

function reverseArray(numArray){
    const rev=[]
    for(let index=numArray.length-1; index>-1; index--)
        rev.push(numArray[index])
    
    return rev
}