const cart = ['shirt', 'pant', 'kurta', 'shoes'];

const promise = createOrder(cart);
promise.then(function(orderId) {
    console.log(orderId)
    return orderId
}).catch(function(err) {
    console.log(err.message);
}).then(function(orderId) {
    console.log('proceedToPayment', orderId);
   return proceedToPayment(orderId)
}).catch(function(err) {
    console.log(err.message);
}).then(
    function(message) {
        console.log(message);
    },
    function(error) {
        console.log(error)
    }
)


function createOrder(cart) {
    const promise = new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const error = new Error("Cart is not valid");
            reject(error);
        }
        const orderID = '12345';
        if(orderID) {
            setTimeout(function() {
                resolve(orderID);    
            }, 3000)
        } 
    }); 
    console.log(promise);
    return promise;
}
function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        if(orderId) {
            resolve("Payment successfull !!");
        }
        reject("Payment failed !!")
    })
}
function validateCart(cart) {
    return false;
}