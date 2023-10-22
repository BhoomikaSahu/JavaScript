var createCounter = function(n) {
    var count = n;
    return function() {
        return count++;
    };
};


const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
 // 10
let a = counter() // 11
let b = counter ()
let c = counter () // rhui