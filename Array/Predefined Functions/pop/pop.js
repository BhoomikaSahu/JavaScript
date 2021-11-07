const nameArray = ["Bhoomika", "Guni", "Shreya"]

for(const name of nameArray)
    console.log(name);

nameArray.pop();     // remove a name from the end of the array

for(const name of nameArray)
    console.log(name);
