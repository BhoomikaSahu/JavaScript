var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
    .then(values => values[0] + values[1]);
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
.then((res) => console.log(res)); // 4
