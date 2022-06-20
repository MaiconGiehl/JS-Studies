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
console.log("TO EXPONENCIAL");
number = 12.34567;

console.log(number.toExponential());
console.log(number.toExponential(4));


// TO STRING
console.log("TO STRING");
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
console.log("TO LOCATE STRING");

number = 123456.789;
console.log(number.toLocaleString());
console.log(number.toLocaleString("pt-BR", {style : "currency", currency: "BRL"}));
console.log(number.toLocaleString("en-US", {style : "currency", currency: "USD"}));
console.log(number.toLocaleString("pt-PT", {style : "currency", currency: "EUR"}));


// IS FINITE and IS INTEGER
console.log("IS FINITE AND IS INTEGER");
console.log(isFinite("2"));

// Number.isFinite don't make the conversion
console.log(Number.isFinite(2));
console.log(Number.isFinite("2"));

console.log(Number.isInteger(2));
console.log(Number.isInteger("2"));


// MIN and MAX VALUE
console.log("MAX VALUE: " + Number.MAX_VALUE);
console.log("MIN VALUE " + Number.MIN_VALUE);


// IS NAN (not a number)
console.log("IS NAN");

let numberAsString = "3.456";
console.log(isNaN(numberAsString));
console.log(numberAsString, typeof numberAsString);

numberAsString = "3.456a";
console.log(isNaN(numberAsString));
console.log(numberAsString, typeof numberAsString, parseFloat(numberAsString));

numberAsString = "a3.456";
console.log(isNaN(numberAsString));
console.log(numberAsString, typeof numberAsString, parseFloat(numberAsString));