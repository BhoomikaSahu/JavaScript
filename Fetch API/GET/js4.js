let id = 5

fetch(`https://reqres.in/api/users/${id}`, {
    method: "POST",
}).then(res=>res.json()).then(res=>console.log(res)).catch(error=>console.log(error))