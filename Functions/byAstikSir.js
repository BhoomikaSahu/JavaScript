/*function add(num1, num2){
    return num1+num2;
}

function mul(num1, num2){
    return num1*num2;
}

function add_mul(fn1, fn2){
    return fn1(10,20) + fn2(10,20)
}

console.log(add_mul(add, mul));*/

/*function returnAFun(num)
{
    return num + function helloWorld()
    {
        console.log("Bhoomika")
    }
}

console.log(returnAFun(10)());*/

// function add1(a)
// {
//     return function add2(b)
//     {
//         return function add3(c)
//         {
//             return function add(d)
//             {
//                 return a+b+c+d
//             }
//         }
//     }
// }
// add1(10);

/*function aaa(a) {
    return function bbb(b) {
      return function ccc(c) {
        return a + b + c;
      };
    };
  }
  
  let result = aaa(10)(10)(20);
  console.log(result);
  
  
   function mult(a, b) {
     return a * b;
   }
  
   function add(a, b) {
     return a + b;
   }
  
   function multAdd(fnMult, fnAdd) {
     let result = fnAdd(10, 20) + fnMult(100, 20) ;
     console.log(result);
   }
    let fmul = mult, fadd = add
    multAdd(fmul, fadd); //pass by reference*/
  
   /*function fnReturnPrintHelloWorld() {
     return function printHelloWorld() {
       console.log("Hello World");
     };
   }
   let fn = fnReturnPrintHelloWorld();
   fn()
   console.log(fn)
  
   function fnReturnPrintHelloWorld() {
     return function printHelloWorld() {
       return "Hello World"
     };
   }
   let fn = fnReturnPrintHelloWorld();
   let fnFinalResult  = fn()
   console.log(fnFinalResult)
  
   let fm = fnReturnPrintHelloWorld() ();
   // let fn = returnedFn ();
   // let fn = Hello World;
   console.log(fm)*/
  
  //  function aa() {
  //    return function bb(a, b) {
  //      return a + b;
  //    };
  //  }
  //  let funOne = aa()
  //  let funTwo = funOne(10, 30)
  //  console.log(funTwo)
  
  //  let fnOne = aa()(10,2)
  //  console.log(fnOne)
  
  
  
   /*function aaa(a) {
     return a + function bbb(b) {
       return function ccc(c) {
         return a + b + c;
       };
     };
   }
  
   let result = aaa(10)(10)(20);
   console.log(result);*/

   function hello(){
     return function print(){
       console.log("Hello")
     }
   }

   const sum = hello()

   console.log(sum)