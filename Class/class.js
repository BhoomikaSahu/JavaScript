class Hello{
    name;   //Suraksha
    constructor(name){  //Suraksha
        this.name = name;
    }
    print(){
        console.log("Hello", this.name)        //Hello Suraksha
    }
}

const n1 = new Hello("Bhoomika");
n1.print();

class Student{
    // variables
    name; //Bhoomika
    enrollmentNo; //011...
    semester; // 7th
    branch; //IT
    // construtor(sname, senrollmentNo, sSemester, sbranch){
        //     this.name = sname;
        //     this.enrollmentNo = senrollmentNo;
        //     this.semester = sSemester;
        //     this.branch = sbranch;
        // }
    details(name, senrollmentNo, sSemester, sbranch){
        this.name = name;
        this.enrollmentNo = senrollmentNo;
        this.semester = sSemester;
        this.branch = sbranch;
    }
    print(){
        console.log(this.name, this.enrollmentNo, this.semester, this.branch);
    }
}

const s1 = new Student();
const s2 = new Student();
s1.details("Bhoomika", "0112IT181009", "7th", "IT");
s1.print();
s2.details("Suraksha", "011..", "5th", "CSE");
s2.print();

// const s2 = new Student("Bhoomika", "0112IT181009", "7th", "IT");
// s1.print();
// s2.print();


