function numToDisplay(event) {
	// ^ Add catch for trailing zeros
	if (display.textContent.length < 16) {
		display.textContent += event.target.textContent;
	}
}

function decimalToDisplay(event) {
	if (display.textContent.length <= 16) {
		if (display.textContent.includes(".")) {
			if (display.textContent.includes("÷")) {
				if (
					display.textContent.lastIndexOf(".") >
						display.textContent.indexOf("÷") ===
					false
				) {
					return (display.textContent += ".");
				}
			} else if (display.textContent.includes("x")) {
				if (
					display.textContent.lastIndexOf(".") >
						display.textContent.indexOf("x") ===
					false
				) {
					return (display.textContent += ".");
				}
			} else if (display.textContent.includes("-")) {
				if (
					display.textContent.lastIndexOf(".") >
						display.textContent.indexOf("-") ===
					false
				) {
					return (display.textContent += ".");
				}
			} else if (display.textContent.includes("+")) {
				if (
					display.textContent.lastIndexOf(".") >
						display.textContent.indexOf("+") ===
					false
				) {
					return (display.textContent += ".");
				}
			}
		} else if (display.textContent === "") {
			display.textContent = "0.";
		} else {
			display.textContent += ".";
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
		if (userBeingDifficult) {
			return (userBeingDifficult = false);
		}
		display.textContent += event.target.textContent;
	}
}

function totalDisplay() {
	if (display.textContent.includes("÷")) {
		let operatorIndex = display.textContent.indexOf("÷");
		num1 = Number(display.textContent.substring(0, operatorIndex));
		num2 = Number(display.textContent.substring(operatorIndex + 1));
		if (num2 === 0) {
			userBeingDifficult = true;
			return alert("You know that doesn't work, right?");
		} else {
			divide();
		}
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
	total = String(total);
	if (Number(total.length) > 16) {
		roundTotal();
	}
	return (display.textContent = total);
}

function divide() {
	return (total = num1 / num2);
}

function multiply() {
	return (total = num1 * num2);
}

function subtract() {
	return (total = num1 - num2);
}

function add() {
	return (total = num1 + num2);
}

function roundTotal() {
	total = String(total);
	while (Number(total.length) > 17) {
		total = String(total).slice(0, -1);
	}
	let totalRounded = total.slice(-2);
	if (!totalRounded.includes(".")) {
		totalRounded = Number(totalRounded) / 10;
	}
	totalRounded = Math.round(Number(totalRounded));
	total = total.slice(0, -2);
	total += String(totalRounded);
	return (total = Number(total));
}

function clearDisplay() {
	num1 = "";
	num2 = "";
	return (display.textContent = "");
}

function backspaceDisplay() {
	return (display.textContent = display.textContent.substring(
		0,
		display.textContent.length - 1
	));
}

let num1;
let num2;
let total;

let userBeingDifficult = false;

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
