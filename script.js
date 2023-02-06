function numToDisplay(event) {
	// ^ Add catch for trailing zeros
	if (display.textContent.length < 16) {
		display.textContent += event.target.textContent;
	}
}

function decimalToDisplay(event) {
	if (display.textContent.length <= 16) {
		if (display.textContent.includes(".") === false) {
			// ^ Change to work with two floats
			if (display.textContent === "") {
				display.textContent += 0;
			}
			display.textContent += event.target.textContent;
		}
	}
}

function operatorToDisplay(event) {
	if (display.textContent.length < 16) {
		if (
			display.textContent.endsWith("÷") ||
			display.textContent.endsWith("x") ||
			display.textContent.endsWith("-") ||
			display.textContent.endsWith("+")
		) {
			return;
		} else if (
			display.textContent.includes("÷") ||
			display.textContent.includes("x") ||
			display.textContent.includes("-") ||
			// ^ Needs to account for negative nums
			display.textContent.includes("+")
		) {
			totalDisplay();
		}
		display.textContent += event.target.textContent;
	}
}

function totalDisplay() {
	if (display.textContent.includes("÷")) {
		let operatorIndex = display.textContent.indexOf("÷");
		num1 = Number(display.textContent.substring(0, operatorIndex));
		num2 = Number(display.textContent.substring(operatorIndex + 1));
		divide();
	} else if (display.textContent.includes("x")) {
		let operatorIndex = display.textContent.indexOf("x");
		num1 = Number(display.textContent.substring(0, operatorIndex));
		num2 = Number(display.textContent.substring(operatorIndex + 1));
		multiply();
	} else if (display.textContent.includes("-")) {
		// Need to account for multiple - when there's a negative num
		let operatorIndex = display.textContent.indexOf("-");
		num1 = Number(display.textContent.substring(0, operatorIndex));
		num2 = Number(display.textContent.substring(operatorIndex + 1));
		subtract();
	} else if (display.textContent.includes("+")) {
		let operatorIndex = display.textContent.indexOf("+");
		num1 = Number(display.textContent.substring(0, operatorIndex));
		num2 = Number(display.textContent.substring(operatorIndex + 1));
		add();
	}
}

function divide() {
	display.textContent = num1 / num2;
}

function multiply() {
	display.textContent = num1 * num2;
}

function subtract() {
	display.textContent = num1 - num2;
}

function add() {
	display.textContent = num1 + num2;
}

function clearDisplay() {
	num1 = "";
	num2 = "";
	display.textContent = "";
}

function backspaceDisplay() {
	// Needs to reset num1/currentOperator/num2 if that's what backspace
	display.textContent = display.textContent.substring(
		0,
		display.textContent.length - 1
	);
}

let num1;
let num2;

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

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", decimalToDisplay);

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", operatorToDisplay);

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", operatorToDisplay);

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", operatorToDisplay);

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", operatorToDisplay);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);

const backspaceBtn = document.querySelector(".backspace");
backspaceBtn.addEventListener("click", backspaceDisplay);

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", totalDisplay);
