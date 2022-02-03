// const byId = document.getElementById("heading");
// const byClassName = document.getElementsByClassName("para");
// const byTagName = document.getElementsByTagName("button");
// const byQuerySelectorId = document.querySelector("#heading")
// const byQuerySelectorClass = document.querySelector(".para")
// const byQuerySelectorTag = document.querySelector("button")

// const byQuerySelectorId = document.querySelectorAll("#heading");
// const byQuerySelectorClass = document.querySelectorAll(".para");
// const byQuerySelectorTag = document.querySelectorAll("button");


// console.log(byId)
// console.log(byClassName)
// console.log(byTagName)
// console.log(byQuerySelectorId);
// console.log(byQuerySelectorClass);
// console.log(byQuerySelectorTag);

// const getById = document.getElementById("heading")
// console.log(getById)

// const getNodesByClassName = document.getElementsByClassName("para")

// console.log(getNodesByClassName[0]);

// const getNodesByTagName = document.getElementsByTagName("button")

// console.log(getNodesByTagName[2]);


const passwordNode = document.getElementById("password")
console.log(passwordNode)

const showPassword = () => {
   passwordNode.type =  passwordNode.type === "text" ? "password" : "text";
}

const onKeyUp = () => {
    console.log(passwordNode.value);
} 