axios
    .post("https://reqres.in/api/users?page=2")
    .then(function(respones) {
        console.log(respones);
        
    })
    .catch(function(error){
        console.log(error);
    });