async function name() {
    const name = "Bhoomika Sahu";
    return name;
}

const promiseData = name().then((res) => console.log(res));

console.log(name(), '--');
