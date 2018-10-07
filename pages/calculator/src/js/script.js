let
	result = document.querySelector("input"),
	numbers = document.querySelectorAll(".number"),
	clear = document.querySelector(".clear"),
	operators = document.querySelectorAll(".operator"),
	equally = document.querySelector(".equally");

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(e) {
		e.preventDefault();
		result.value += this.value;
	});
}

for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function(e) {
		e.preventDefault();
		let
			value = result.value,
			operatorPosition = value[value.length - 2];

		if (operatorPosition != "+" &&
			operatorPosition != "-" &&
			operatorPosition != "*" &&
			operatorPosition != "/") {
			result.value += " " + this.value + " ";
		} else {
			result.value = value.substr(0, value.length - 3);
			result.value += " " + this.value + " ";
		}

	});
}

clear.addEventListener("click", function(e) {
	result.value = "";
});

equally.addEventListener("click", function(e) {
  res = eval(result.value);
  result.value = res;
});
