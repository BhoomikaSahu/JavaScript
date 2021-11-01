const numbersArray = [10,20,37,40,5,100,324,234,45,24,4,45,12,435];
const subarray = slice(numbersArray);
for(const num of subarray)
    console.log(num);

function slice(arr, sIndex, eIndex){
    const subarray = [];
    if(sIndex<0)
        return subarray;
    else if(eIndex === undefined || eIndex>=arr.length){
        eIndex = arr.length;
        if(sIndex === undefined)
            sIndex = 0;
    }

    for(let index=sIndex; index<eIndex; index++)
        subarray.push(arr[index]);
    return subarray;
}