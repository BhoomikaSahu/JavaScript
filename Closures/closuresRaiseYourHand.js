let countClicks = 0;
// button.addEventListener("click", function clickHandler() {
//   countClicks++;
// });
const result = (function immediate(number) {
  console.log(countClicks, number);
  const message = `number is: ${number}`;
  return message;
})(100);

// setTimeout(function delayedReload() {
//   location.reload();
// }, 1000);
