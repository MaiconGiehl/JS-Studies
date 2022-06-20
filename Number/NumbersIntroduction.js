/* 
    In this section,
    I'm going to study 
    number methods
*/


let number = 1234567.890;

// TO FIXED
console.log("TO FIXED");
console.log(number.toFixed(2));
console.log(number.toFixed(5));


// TO PRECISION
console.log("TO PRECISION")
console.log(number.toPrecision(15));

console.log(123 .toPrecision(6));
console.log((123).toPrecision(6));


// TO EXPONENTIAL
number = 12.34567;

console.log(number.toExponential());
console.log(number.toExponential(4));


// TO STRING
number = 15;

console.log(number.toString(2));
console.log(typeof number.toString(2));

console.log((0).toString(2));
console.log((1).toString(2));
console.log((2).toString(2));
console.log((3).toString(2));
console.log((4).toString(2));


console.log((15).toString(16));
console.log((16).toString(16));


// TO LOCALE STRING
number = 123456.789;
console.log(number.toLocaleString());
console.log(number.toLocaleString("pt-BR", {style : "currency", currency: "BRL"}));
console.log(number.toLocaleString("en-US", {style : "currency", currency: "USD"}));
console.log(number.toLocaleString("pt-PT", {style : "currency", currency: "EUR"}));