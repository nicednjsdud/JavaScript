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

// 2.6 강의 Object

const playerName = "BOB";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

const player = {
  name: "BOB",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.lastName = "potato";
player.points = player.points + 15;
console.log(player);

// 2.7,8 강의 Functions part One TWO

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

plus(8, 60);

function divide(a, b) {
  console.log(a / b);
}
divide(98, 20);

const palyer1 = {
  name: "nico",
  sayHello1: function (otherPersonsName) {
    console.log("hellllo!! " + otherPersonsName + " nice to meet you ");
  },
};
console.log(palyer1.name);
palyer1.sayHello1("lynn");

// 2.9 Recap

let isNicoFat = true;
isNicoFat = false;

const me = "sexy";
const days = [1, 2, false, true, null, undefined, "text"];
const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("one");
console.log(toBuy);