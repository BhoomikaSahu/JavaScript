class Person{
    firstName;
    lastName;
    age;
    setValues(fn, ln, age){
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
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
    setValues2(sID, sName, sS, sbranch){
        this.studentID = sID;
        this.collegeName = sName;
        this.semester = sS;
        this.branch = sbranch;
    }
    printValues(){
        console.log(this.studentID, this.collegeName, this.semester, this.branch);
    }
}

// const p1 = new person();
// p1.setValues("Suraksha", "Sharma", 20);
// p1.print();

const s1 = new Student();
s1.setValues("Suraksha", "Sharma", 20);
s1.setValues2("123456", "NRI", "5th", "CSE");
s1.print();
s1.printValues();