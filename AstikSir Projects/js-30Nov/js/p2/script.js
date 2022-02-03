const arr = ["./assests/index.jpg", " ./assests/index1.jpg"];

(function () {
    const getImageTagById = document.getElementById("image")
    let count = 0;
    setInterval(() => {
        getImageTagById.src = arr[count % arr.length]
        count++
    }, 1000);
})()