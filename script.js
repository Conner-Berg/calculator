function add() {
	let a = Number(prompt("Addition!\nFirst number: "));
	let b = Number(prompt("Addition!\nSecond number: "));
	let result = a + b;
	console.log(`The addition result is ${result}`);
	return alert(`The addition result is ${result}`);
}

function subtract() {
	let a = Number(prompt("Subtraction!\nFirst number: "));
	let b = Number(prompt("Subtraction!\nSecond number: "));
	let result = a - b;
	console.log(`The subtraction result is ${result}`);
	return alert(`The subtraction result is ${result}`);
}

function multiply() {
	let a = Number(prompt("Multiplication!\nFirst number: "));
	let b = Number(prompt("Multiplication!\nSecond number: "));
	let result = a * b;
	console.log(`The multiplication result is ${result}`);
	return alert(`The multiplication result is ${result}`);
}

function divide() {
	let a = Number(prompt("Division!\nFirst number: "));
	let b = Number(prompt("Division!\nSecond number: "));
	let result = a / b;
	console.log(`The division result is ${result}`);
	return alert(`The division result is ${result}`);
}

function operate() {
	let operator = prompt("Operator: ");
	if (
		operator.toLowerCase() === "add" ||
		operator.toLowerCase() === "addition" ||
		operator === "+"
	) {
		add();
	} else if (
		operator.toLowerCase() === "subtract" ||
		operator.toLowerCase() === "subtraction" ||
		operator === "-"
	) {
		subtract();
	} else if (
		operator.toLowerCase() === "multiply" ||
		operator.toLowerCase() === "multiplication" ||
		operator.toLowerCase() === "x" ||
		operator === "*"
	) {
		multiply();
	} else if (
		operator.toLowerCase() === "divide" ||
		operator.toLowerCase() === "division" ||
		operator === "/" ||
		operator === "÷"
	) {
		divide();
	} else {
		alert(
			"Only addition, subtraction, multiplication, and subtraction are supported.\nPlease try again."
		);
		operate();
	}
}

function numToDisplay(event) {
	display.textContent += event.target.textContent;
}

function operatorToDisplay() {}

function clearDisplay() {
	display.textContent = "";
}

function totalDisplay() {}

let display = document.querySelector(".display");

const num0Btn = document.querySelector(".zero");
num0Btn.addEventListener("click", numToDisplay);

const num1Btn = document.querySelector(".one");
num1Btn.addEventListener("click", numToDisplay);

const num2Btn = document.querySelector(".two");
num2Btn.addEventListener("click", numToDisplay);

const num3Btn = document.querySelector(".three");
num3Btn.addEventListener("click", numToDisplay);

const num4Btn = document.querySelector(".four");
num4Btn.addEventListener("click", numToDisplay);

const num5Btn = document.querySelector(".five");
num5Btn.addEventListener("click", numToDisplay);

const num6Btn = document.querySelector(".six");
num6Btn.addEventListener("click", numToDisplay);

const num7Btn = document.querySelector(".seven");
num7Btn.addEventListener("click", numToDisplay);

const num8Btn = document.querySelector(".eight");
num8Btn.addEventListener("click", numToDisplay);

const num9Btn = document.querySelector(".nine");
num9Btn.addEventListener("click", numToDisplay);

/* const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click");

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click"); */

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", add);

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", subtract);

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", multiply);

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", divide);

const operateBtn = document.querySelector(".operate-btn");
operateBtn.addEventListener("click", operate);
