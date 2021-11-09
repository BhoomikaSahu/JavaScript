const nameArray = ["Bhoomika", "Guni", "Shreya"]

for(const name of nameArray)
    console.log(name);

console.log("--------------------------");     
nameArray.shift("Palak");     // remove a name from the beginning of the array

for(const name of nameArray)
    console.log(name);
