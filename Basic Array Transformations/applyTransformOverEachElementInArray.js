var map = function(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        console.log(i, fn(arr[i], i));
        newArr.push(fn(arr[i]));
    }
    return newArr;
};

const arr = [1, 2, 3];
const fn = (n) => {
    return n+1;
}

map(arr, fn);