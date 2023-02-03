function add() {
	let a = Number(prompt("a: "));
	let b = Number(prompt("b: "));
	return console.log(a + b);
}

function subtract() {
	let a = Number(prompt("a: "));
	let b = Number(prompt("b: "));
	return console.log(a - b);
}

function multiply() {
	let a = Number(prompt("a: "));
	let b = Number(prompt("b: "));
	return console.log(a * b);
}

function divide() {
	let a = Number(prompt("a: "));
	let b = Number(prompt("b: "));
	return console.log(a / b);
}

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", add);

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", subtract);

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", multiply);

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", divide);
