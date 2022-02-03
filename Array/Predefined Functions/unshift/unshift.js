const nameArray = ["Bhoomika", "Guni", "Shreya"]

for(const name of nameArray)
    console.log(name);

console.log("--------------------------");     
nameArray.unshift("Palak");     // add a name at the beginning of the array

for(const name of nameArray)
    console.log(name);
