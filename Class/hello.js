class Hello{
    name;
    constructor(yourName){
        this.name = yourName
    }
    nameOfHuman() {
        console.log("Hello", this.name, "!!");
    }
}

const bhumi = new Hello("Bhoomika");
bhumi.nameOfHuman();