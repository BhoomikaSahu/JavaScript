// function alterUpperCase(){
    


// }

// const newString = "Bhoomi".alterUpperCase()
// console.log(newString)

String.prototype.alterUpperCase = function () {
  const str = fname;
  let newString = "";
  for (let index = 0; index < str.length; index++) {
    if (index % 2 !== 0) {
      newString += str[index].toLocaleLowerCase();
    } 
    else {
      newString += str[index].toUpperCase();
    }
  }
  return newString;
};
let fname = "Bhoomika"
const AUC = fname.alterUpperCase();
console.log(AUC);