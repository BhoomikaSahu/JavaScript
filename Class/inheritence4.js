class A{
    name;
    constructor(name1){
        this.name = name1;
    }
    print1(){
        console.log(this.name);
    }
}
class B extends A{
    constructor(name1, name2){
        super(name1);
        this.name = name2;
    }
    print2(){
        console.log(this.name);
    }
}
class C extends B{
    constructor(name1, name2, name3){
        super(name1, name2)
        this.name = name3;
    }
    print3(){
        console.log(this.name);
    }
}


const c1 = new C("Bhoomika", "Suraksha", "Ayushi");
c1.print1();
c1.print2();
c1.print3();
