function getRandomNumber (start = 0, end = 10, integer = true) {
    let r = Math.random() * (end - start + 1) + start;
    return integer ? parseInt(r) : r;

}

console.log(getRandomNumber(2, 3));
console.log(getRandomNumber(2, 3, false));