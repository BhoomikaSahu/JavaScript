const arrayOfArrays = [[1,2,3,4,5],[6,7,8,9,10],[11,22,33,44,55]]

function printArray(element){
    console.log(element)
}
function array(element){
    element.filter(printArray)
}

arrayOfArrays.filter(array)