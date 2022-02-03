// function newBind(object){
  
// }

const student = {
    firstName : "Bhoomika",
    lastName : "Sahu"
}

function fullName() {
    console.log(`${this.firstName} ${this.lastName}`)
}

fullName.prototype.good()

const fn = fullName.bind(student);
fn()
const fn = fullName.newBind(student);

// Function.prototype.bindfn=function(numOne){
//     //const str=this;
//     const value=numOne
//     console.log(value)
//      return function(numTwo){
//          return  add(value,numTwo)
//      }
// }
// function add(a,b)
// {
    
//     console.log(a+b)
// }

// const fn=add.bindfn(4)
// fn(2)