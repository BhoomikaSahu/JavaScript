const multiply = (num1, num2) => {
    let result = num1 * num2;
    const anotherFun = (num2) => {
        return num1 * num2;
    }
    if(!num2) return anotherFun;
    return anotherFun;

};

const double = multiply(2);


console.log(multiply(10, 20));
console.log(double(4));
