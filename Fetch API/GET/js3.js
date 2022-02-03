let id = 3

fetch(`https://reqres.in/api/users/${id}`, {
    method: "GET",
}).then(res=>res.json()).then(res=>console.log(res)).catch(error=>console.log(error))