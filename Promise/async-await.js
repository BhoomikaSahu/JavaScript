const p1 = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve("P1 resolved !!"),
        10000
    )
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve("P2 resolved !!"),
        5000
    )
});

// async function handlePromiseWithAsyncAwait() {
//     const data1 = await p1;                     // handle promise using async/await.
//     console.log('from async function1')
//     console.log(data1, 'data1');

//     const data2 = await p2;                     // handle promise using async/await.
//     console.log('from async function2')
//     console.log(data2, 'data2');
// }


function handlePromise () {
    p1.then(res => {
        console.log('Hello World');
        console.log(res)
    }); //handling promise without using async/await.
    p2.then(res => {
        console.log(res, '2');
    })
}

handlePromise();
// handlePromiseWithAsyncAwait();