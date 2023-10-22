function reduce(nums, fn, init) {
    let sum = init;
    for(let i=0; i<nums.lenght; i++) {
        console.log(nums, fn, init);
        sum = fn(sum, arr[i]);
    }
    return sum;
};

const arr = [1, 2, 3, 4];

const sum = (acc, cur) => {
    console.log('acc', acc, 'cur', cur);
    return acc+cur;
}

const result = reduce(arr, sum, 0);

console.log('resul;t', result);