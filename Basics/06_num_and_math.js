// Basic number declaration
const score = 400;
console.log(score);// 400

// Make number explicitely
// It is in key value pair as it's object because of new
const balance = new Number(100);
console.log(balance);// [Number : 100]
console.log(typeof balance);// Object

// using methods on number
// 1. toString() :- creating number to string
let some = balance.toString();
console.log(some);// 100
console.log(typeof some);// String
console.log(balance.toString().length);// 3

// 2. toFixed() :- it will fixed the value to show upto some decimal
console.log(balance.toFixed(1));// 100.0

// 3. toPrecision() :- It will round values after certain decimal
let Num = 123.9866
console.log(Num.toPrecision(4)); // 124.0

// 4. toLocaleString :- It will convert string into locale 
let Rupees = 10000000
console.log(Rupees.toLocaleString('en-IN')); // 1,00,00,000