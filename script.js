const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const btnPlus = document.getElementById('plus')
const btnMinus = document.getElementById('minus')
const calculate = document.getElementById('calculate')
let action = '+'

btnPlus.onclick = function () {
	action = '+'
}
btnMinus.onclick = function () {
	action = '-'
}
calculate.onclick = function () {
	if (action == '+') {
		calcResult = +input1.value + +input2.value
	} else {
		calcResult = +input1.value - +input2.value
	}
	result.textContent = calcResult
}
