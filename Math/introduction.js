/* 
    In this section,
    I'm going to study 
    math methods and properties
*/

// MIN and MAX
console.log("MIN AND MAX");
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 10, 4, 5));

let arr = [1, 2, 10, 4, 5];
console.log(Math.max(...arr));

// ROUND
console.log("ROUND");

console.log(Math.round(45.5));
console.log(Math.round(45.499999999));
console.log(Math.round(45.500000001));

console.log(Math.floor(45.999999999));
console.log(Math.ceil(45.000000001));


// POW and SQRT
console.log("POW and SQRT");

console.log(Math.pow(2, 3));

console.log(sqrt(49));
console.log(cbrt(8));

// MATH RANDOM
console.log("MATH RANDOM");
console.log(Math.random());
console.log(Math.random() * 2);
console.log(Math.floor(Math.random() * 10));