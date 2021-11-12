function rating(actualRating){
    const arr = [0, 0, 0, 0, 0];
    const num = Math.trunc(actualRating);
    const diff = actualRating - num;

    //console.log(diff.toFixed(2))
    //diff.toFixed(2);
//3.4 - 1 1 1 0.4 0
    for(let i=0; i<num; i++){
        arr[i] = 1;
    }
    if(num == 5)
        return arr;

    arr[num] = diff;

    return arr;

}

console.log(rating(3.4))