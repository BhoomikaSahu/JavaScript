const textEl = document.getElementById("text");
const text = "Hello World";
const SPEED = 500;
let index = 1;
writeText();
function writeText() {
  textEl.innerHTML = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
 setTimeout(writeText, SPEED);
}
