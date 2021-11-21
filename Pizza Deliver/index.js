let value = 0;
function pizzaSize() {
    let size = prompt("Which Size You Want To Order?")
    switch(size.toLowerCase()){
        case "small": value += 100;
            break;
        case "medium": value += 150;
            break;
        case "large": value += 200;
            break;
        default : value = "Plese choose correct size!"
    }
}

function extraCheese(params) {
    let cheese = prompt("How much?")
    switch(cheese.toLowerCase()){
        case "for small size": value += 10;
            break;
        case "for medium size": value += 15;
            break;
        case "for large size": value += 20;
            break;
        default : value += 0;
    }
}

function totalBill(){
    document.getElementById("demo").innerHTML = "Please Pay " + value + "/- Rupees.";
}