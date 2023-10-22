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

printDetails = print.bind(user2, "raisen");

printDetails();