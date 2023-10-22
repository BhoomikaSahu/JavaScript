for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // 1 2 3
  }, i*1000);
}
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // 3 3 3
  }, i*1000);
}
for (var i = 0; i < 3; i++) {
  var j = i;
  setTimeout(function log() {
    console.log(j); // 2 2 2
  }, 1000);
}