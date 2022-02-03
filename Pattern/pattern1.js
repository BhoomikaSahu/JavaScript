/*
print this pattern
// // // //
// // // //
// // // //
// // // //
*/

pattern(4);

function pattern(n){
    
    for(let row=1; row<=n; row++){
        let s = "";
        for(let column=1; column<=n; column++)
            s += "// "    
        console.log(s);
    }
}

for(const p of )

