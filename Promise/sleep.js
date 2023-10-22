async function sleep(millis) {
    return new Promise(function(res, rej) {
        setTimeout(() => {
           res();
       }, millis)
    })
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
console.log(Date.now() - t)
