class Person{
    firstName;
    lastName;
    age;
    constructor(fn, ln, age){
        this.firstName = fn;  // suraksha
        this.lastName = ln;   // sharma
        this.age = age;       // 20
    }
    print(){
        console.log(`Your full name is ${this.firstName} ${this.lastName} and you are ${this.age} years old.`)
    }
}
class Student extends Person{
    studentID;
    collegeName;
    semester;
    branch;
    constructor(fN, lN, age, sID, cName, sS, sbranch){
        super(fN, lN, age);   //suraksha, sharma, 20
        this.studentID = sID;  // 123456
        this.collegeName = cName; // NRI
        this.semester = sS;      //5th
        this.branch = sbranch;    //CSE
    }
    printValues(){
        console.log(this.studentID, this.collegeName, this.semester, this.branch);
    }
}
const p1 = new Person("Suraksha", "Sharma", 20);
p1.printValues();

// const s1 = new Student()

// const s1 = new Student("Suraksha","Sharma",20,"123456", "NRI", "5th", "CSE");
// s1.print();
// s1.printValues();


// s1.setValues("Suraksha", "Sharma", 20);
// s1.setValues2("123456", "NRI", "5th", "CSE");
// s1.print();
// s1.printValues();