const EL = document.getElementById("heading");
let count = 0;
console.log(document)
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") {
      count++
      EL.innerText = `Tab change count ${count}`
  }
});

