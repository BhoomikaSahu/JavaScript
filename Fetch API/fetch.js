fetch("https://reqres.in/api/users/2")
  .then((res) => res.json())
  .then((res) => console.log(res));
console.log("Hello!");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => console.log(res));
console.log("Hello!");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => console.log(res));
console.log("Hello!");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => console.log(res));
console.log("Hello!");
