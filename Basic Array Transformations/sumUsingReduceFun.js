const arr = [1, 2, 3];

const sum = arr.reduce((acc, cur) => {
    console.log('acc', acc, 'cur', cur);
    return acc+cur;
}, 0)
console.log('sum', sum);