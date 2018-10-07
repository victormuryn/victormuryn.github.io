let
	result = document.querySelector("input"),
	numbers = document.querySelectorAll(".number"),
	clear = document.querySelector(".clear"),
	operators = document.querySelectorAll(".operator");

// function count(operator) {
// 	let res;
// 	if (operator == "*") {
// 		res =
// 	}
// }

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(e) {
		e.preventDefault();
		result.value += this.value;
	});
}

clear.addEventListener("click", function(e) {
	result.value = "";
});

for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function(e) {
		e.preventDefault();
		let value = result.value;
		if (value[value.length - 2] != "+" && value[value.length - 2] != "-" && value[value.length - 2] != "*" && value[value.length - 2] != "/") {
			result.value += " " + this.value + " ";
		} else {
			result.splice(result.length - 4, result.length);
			result.value += " " + this.value + " ";
		}
	});
}
