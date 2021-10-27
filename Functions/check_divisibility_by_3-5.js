function check_num(num){
    if(num%3 == 0)
        if(num%5 == 0)
            console.log("Number is divisible by both 3 and 5");
        else
            console.log("Number is divisible by only 3");
    else
        console.log("Number is divisible by both 5");
}

check_num(15);
check_num(27);
check_num(50);