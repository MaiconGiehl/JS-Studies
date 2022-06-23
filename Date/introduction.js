const date = new Date();
console.log(date);
console.log("day: " + date.getDay());
console.log("date: " + date.getDate());
console.log("Month: " + date.getMonth());
console.log("Timestamp: " + date.getTime());
console.log("FullYear: " + date.getFullYear());
console.log("Hours: " + date.getHours());
console.log("UTC-Hours: " + date.getUTCHours());
console.log("Time Off-Set: " + date.getTimezoneOffset());

date.setDate(5);
console.log(date)