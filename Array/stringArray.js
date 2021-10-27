let fruits=["Mango", "Apple", "Orange", "Banana", "Blackberries"]
let index=0

// printing elements 
while(index  <fruits.length){
    console.log(fruits[index])
    index++;
}
console.log("******************************")

// printing elements in reverse order 
// index = fruits.length-1
// while(index >= 0){
//     console.log(fruits[index])
//     index--;
// }
// console.log("******************************")


while(index > 0){
    console.log(fruits[--index])
    //index--;
}
console.log("******************************")

// printing elements in reverse order using pop function
index=0
while(index  < fruits.length){
    console.log(fruits.pop())
    index++;
}