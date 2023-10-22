function display_random_image(){
    const imgList = [
        {
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
        },
        {
            src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
        },
        {
            src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"
        }
    ]
    let list = [];
    imgList.map((img, index) => {
        list[index] = new Image();
        list[index].src = imgList[index].src;
        list[index].width = imgList[index].width;
        list[index].height = imgList[index].height;
    })
    
    let img = new Image();
    img.src = imgList[1].src;
    img.width = imgList[1].width;
    img.height = imgList[1].height;
    document.body.append(img)
    console.log(list);
}


// Blocking main thread
// setTimeout(function(){
//     console.log('after 100 mili sec');
// }, 0);
// function print (fun) {
//     console.log(' I am print', fun);
//     for(let i=0; i<100; i++){
//         console.log(i);
//     }
//     // setTimeout(fun, 5000);
// }

// print(function () {
//     console.log('calling to print fun');
// })

// Named function expression 
// var a = function xyz() {
//     console.log('Bhoomika');
//     // xyz();
// }
// a();

// setTimeout()
// function a() {
//     // var b=1;
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000*i)
//         console.log('Bhoomika', i);
//     }
//     console.log('Palak');
// }
// a();

// Closure
// function a () {
//     var val = 26;
//     function b () {
//         console.log(val);
//     }
//     val = 20
//     return b;
// }

// var x = a()
// console.log(a);
// x();
// block scope
// let x;
// x = 100;
// function a() {
//     console.log(b);
// }
// a()
// var b = 10; 

// {
//     var aa = 4;
//     const y = 2;
//     let z = 3;
// }


// var x;
// a(); 
// b();
// function a () {
//     var x = 10;
//     console.log('a', x);
//     c()
// }
// function b () {
//     var x = 100;
//     console.log('b', x);
// }
// function c () {
//     var x = 1000;
//     console.log('c', x);
// }
// console.log('x', x);

// console.log(document.body.children);

// document.getElementById("heading").style.background = "red";
// document.body.childNodes[3].style.background = "pink";

// const clickBtn = document.createElement("button");
// const removeBtn = document.createElement("button");

// clickBtn.innerText = "Create";
// removeBtn.innerText = "Delete";
// document.body.append(clickBtn);
// document.body.append(removeBtn);
// clickBtn.onclick = create;
// removeBtn.onclick = remove;

// function create() {
//     const h1 = document.createElement("H1");
//     h1.innerText = "Hello"
//     document.body.append(h1);
// }

// function remove() {
//     document.querySelector("h1").remove();
// }


// export default class Company extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0}
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick () {
//     this.setState({count: this.state.count + 1});
//   }
//   render () {
//     console.log('av')
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     )
//   }
// }

