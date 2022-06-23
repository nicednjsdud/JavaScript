// 2.3 강의 const and let
// const 항상 let 가끔 var x
const a = 5;
const b = 2;
let myname = "wonyoung";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myname);

myname = "nicolas";

console.log("your new name is " + myname);

// 2.4 강의 boolean

const amIFat = true; // null 아무것도 없음
let something; // Undefined
console.log(amIFat);

// 2.5 강의 Arrays

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Get Item from Araay
console.log(daysOfWeek[5]); // sat

// Add one more day to the array
daysOfWeek.push("week");

console.log(daysOfWeek);
