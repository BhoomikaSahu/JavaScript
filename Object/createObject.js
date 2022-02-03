const person = {
    firstName: "Bhoomika",
    lastName: "Sahu",
    cityName: "Raisen"
}

//There are three ways to access object properties
const fName = person.firstName;    
const lName = person["lastName"];
const city = "cityName";

console.log("I am " + fName + " " + lName);
console.log("I am from " + person[city]);

//let array=[]
// for(let i=1; i<=3; i++){
//     array.push(Object.keys(i));
// }
// /*for(let i of person){
//     array.push(Object.keys(i));
// }*/
// for(let i of array)
//     console.log(i);

for(const val of Object.values(person))
console.log(val)
