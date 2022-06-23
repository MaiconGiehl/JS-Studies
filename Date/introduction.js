const date = new Date();

date.setDate(5);
console.log("day: " + date.getDay());
console.log("date: " + date.getDate());
console.log("Month: " + date.getMonth());
console.log("Timestamp: " + date.getTime());
console.log("FullYear: " + date.getFullYear());
console.log("Hours: " + date.getHours());
console.log("UTC-Hours: " + date.getUTCHours());
console.log("Time Off-Set: " + date.getTimezoneOffset());


// to string

console.log("");
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toUTCString());

// format
console.log("");
console.log(date.toLocaleString("en-US"));
console.log(date.toLocaleString("en-US", {month: "long", weekday: "long", day: "numeric"}));
console.log(date.toLocaleString("pt-BR", {month: "long", weekday: "long", day: "numeric"}));
console.log(date.toLocaleString("pt-BR", {month: "short", weekday: "short", day: "numeric"}));


console.log("");
console.log(date);