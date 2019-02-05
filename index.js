// String
/*
const what = "what";

console.log(what);
*/

/*
const what = false;

console.log(what);
*/
/*
const num = 123;

console.log(num);

const wat = 55.1;
console.log(wat);
*/

/*
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[3]);
*/
/*
const nicoInfo = {
  name: "dawoon",
  age: 33,
  gender: "Male",
  isHandsome: true,
  array: [
    {
      name: "jake",
      food: "good"
    },
    {
      name: true
    }
  ]
};

console.log(nicoInfo);
console.log(console);
*/
/*
function greeting(name, age) {
  //console.log(`Hello ${name} you are ${age} years old`);
  return `Hello ${name} you are ${age} years old`;
}
//greeting("dawoon", 15);

const greetingdowny = greeting("dawoon", 14);

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return a / b;
  }
};

console.log(greetingdowny);
const plus = calculator.plus(5, 5);
console.log(plus);

const mul = calculator.mul(3, 5);
console.log(mul);

const title = document.getElementById("title");
console.log(title);

title.innerHTML = "HI! From JS";
title.style.color = "red";

console.dir(title);
console.dir(document);
*/
//const title2 = document.querySelector("#title");
/*
const title = document.querySelector("#title");

function handleClick(event) {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
*/

const title = document.querySelector("#title"); //DOM

const CLICKED_CLASS = "clicked";

function handleClick() {
  /*
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
  */
  title.classList.toggle(CLICKED_CLASS);
}
/*
const BASE_COLOR = "green";
const OTHER_COLOR = "#e84393";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
*/
function init() {
  //title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
  //title.addEventListener("mouseenter", handleClick);
}

init();
