let id;
fetch("https://reqres.in/api/users")
.then((res) => res.json())
.then((res)=> console.log(res));