const amIFAt = true,
  amIbrain = null; // boolean, null(nothing in this)

let something; // undefine (variable is exist, but it isn't got a value)

// Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const nonsense = [1, 2, "hello", false, null, true, undefined];

daysOfWeek[1];
daysOfWeek.push("end");

// Object
const player = {
  name: "kais",
  points: 10,
  fat: true,
};

player.fat = false;
player.lastName = "potato"; // object 끝에 property 추가
player.points = player.points + 15;
console.log(player.points);

// Function
function helloFriends(name, age) {
  console.log(`hello ${name}!!! your age is ${age}`);
}

helloFriends("kai", Math.floor(20.1));
helloFriends("adf", 21);
helloFriends("meorl", 24);
helloFriends("rachel", 23);
helloFriends("TOm", 21);

const listener = {
  name: "nico",
  sayHello: function () {
    console.log("hello!");
  },
};

listener.sayHello();

// Recap

const calculator = {
  add: function (a, b) {
    let result = a + b;
    return result;
  },
  minus: function (a, b) {
    let result = a - b;
    return result;
  },
  divide: function (a, b) {
    let result = a / b;
    return result;
  },
  powerOff: function (a, b) {
    let result = a ** b;
    return result;
  },
  times: function (a, b) {
    let result = a * b;
    return result;
  },
};

console.log(calculator.add(2, 5));

// conditionals (조건문)
const age = "22";
console.log(typeof player.fat);

age = parseInt(age);

console.log(isNaN(age)); // 매개변수가 Nan 일경우 true 반환
