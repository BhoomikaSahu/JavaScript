const api = "https://api.github.com/users/akshaymarch7";

const result = fetch(api)
console.log(result);

const cart = ['shirt'];

const promise = createOrder(cart);

promise.then((orderId) => orderID) // consuming promise
