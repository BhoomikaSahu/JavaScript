// class A{
//     constructor(c){
//         this.c = c;
//         // console.log(c);
//     }

//     print(){
//         console.log(this.c);
//     }
// }

// class B extends A{
//     constructor(c){
//         super(c)
//         this.c = c;
//         // console.log(c);
//     }
//     print(){
//         console.log(this.c);
//     }
// }

// class C extends B
// {
//     constructor(c){
//         super(c)
//         this.cc = c;
//         // console.log(c);
//     }
//     print(){
//         console.log(c);
//     }
// }

// const a = new C("Bhoomi");
// // c.print()
// // const b = new B(11);
// // b.print()
// // const a = new A(1);

// console.log(a.cc)

// console.log(abc)


class A {
    constructor(name) {
        this.name = name
        console.log(this.name)
    }
    AprintName() {
        console.log(this.name)
    }
}
class B extends A {
    name;
    constructor(second_name,third_name) {
        super(third_name)
        
        this.name = second_name
     console.log(this.name)
    }
    BprintName() {
        console.log(this.name)
    }
}
class C extends B {
    constructor(name, second_name, third_name) {
        super(second_name,third_name)
        this.name = name
        console.log(this.name)
    }
    CprintName(name){
        console.log(this.name)
    }
}
const obj = new C("astik", "aman","mohan")

obj.AprintName()
obj.CprintName()
obj.BprintName()