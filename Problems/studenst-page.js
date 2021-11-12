/* 
Find rang of number of students on a particular page no., if each page contains 10 students record.
input: 457, 23
output: "220-230"

input: 457, 46
output: "450-457"
*/

function calOfStudents(totalStudents, currentPage){
    let numOfstud = "";

    if(currentPage*10 < totalStudents+10 && currentPage >= 1)
        if((currentPage*10) > totalStudents)                          // if calOfStudents(235, 24)
            numOfstud += (currentPage-1)*10 + "-" + totalStudents;   
    
        else    
            numOfstud += (currentPage-1)*10 + "-" + currentPage*10;

    else
        numOfstud += "Invalid Data";
    
    return numOfstud;
}

console.log(calOfStudents(230,0));