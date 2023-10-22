const input = document.getElementById("numOfWords");
const btn = document.querySelector("button");

const getData = () =>  {
    const num = Number(input.value);
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let para = ""
    for(let i=0; i<num; i++){
        let word = "";
        const randomNum = (Math.random()*10).toFixed(0)
        for(let j=0; j<randomNum; j++){
            let x = (Math.random()*10).toFixed(0)
            // console.log(x);
            word += string[x]
            // console.log(word , "j", j);
        }
        para += `${word} `;
    }
    document.querySelector("p").innerText = para
}

const generatePara = () => {

}

console.log('input', btn);
btn.onclick = getData


