const user1 = {
    firstName: 'Bhoomika',
    lastName: "Sahu",
    print: function () {
        console.log(this.firstName + ' ' + this.lastName);
    },
}

const user2= {
    firstName: 'Palak',
    lastName: "Sahu",
}
function show() {
    console.log(this.firstName + ' ---' + this.lastName);
} 
function print(city, state) {
    console.log(this.firstName + ' ' + this.lastName + " from " + city + ', ' + state);
}
user1.print.call(user2);
show.call(user2);
print.call(user1, "Raisen", "M.P.");