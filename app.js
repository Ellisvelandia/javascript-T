// const numberOne = document.getElementById("n1");
// const numbertwo = document.getElementById("n2");
// const resp = document.getElementById("resps");
// const btncalculate = document.getElementById("calculate");

// btncalculate.addEventListener("click", calculate);

// function calculate() {
//   const op1 = parseFloat(numberOne.value);
//   const op2 = parseFloat(numbertwo.value);

//   let resps = op1 + op2;

//   resp.innerText = resps;

//   resp.style = "color:red";
// }

// Array
// const reply = document.getElementById("resp");
// const btnRunner = document.getElementById("run");

// btnRunner.addEventListener("click", start);

// let fruits = ["apple", "mango", "strawberry", "pear"];

// function start() {
//   fruits.forEach(function (item, index, array) {
//     reply.innerHTML = array;
//   });
// }

// call fetch

// async function obtainData() {
//   await fetch("https://api.github.com/repositories/19438/commits")
//  .then(response=> response.json())
//  .then(json=> console.log(json))
//  .catch(error=> console.log('request for error',error))
// }

// obtainData()

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "null";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
