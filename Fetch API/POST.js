fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),

    Headers:{
        "Content-type": ""
    }
}).then(res=>res.json()).then(res=>console.log(res)).catch(error=>console.log(error))