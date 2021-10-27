let num=[], count=0
for(let index=0; index<5; index++)
    num.push(++count);

// print array using for loop
for(let index=num.length-1; index>=0; index--)
    console.log(num[index]);                       

// print array using while loop
let index=0
while(index<5){
    console.log(num[index])
    index++;
}



