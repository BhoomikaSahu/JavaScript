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
function show(arr) {
    console.log(arr, this.firstName + ' ---' + this.lastName + " from ");
} 
function print(city, state) {
    console.log(this.firstName + ' ' + this.lastName + " from " + city + ', ' + state);
}
// user1.print.call(user2);
show.apply(user2, ["Bhopal", "M.P.", 'abcd']);
// print.apply(user1, ["Raisen", "M.P."]);