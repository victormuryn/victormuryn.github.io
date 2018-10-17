let
	result = document.querySelector("input"),
	numbers = document.querySelectorAll(".number"),
	clear = document.querySelector(".clear"),
	operators = document.querySelectorAll(".operator"),
	equally = document.querySelector(".equally"),
	timer;

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(e) {
		e.preventDefault();
		if (result.value === "true" || result.value === "false") {
			result.value = this.value;
		} else {
			result.value += this.value;
		}
	});
}

for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function(e) {
		e.preventDefault();
		let
			value = result.value,
			operatorPosition = value[value.length - 2];

		if (result.value === "false" || result.value === "true") {

			result.value = "";
		} else {
			if (operatorPosition != "+" &&
				operatorPosition != "-" &&
				operatorPosition != "*" &&
				operatorPosition != "<" &&
				operatorPosition != ">" &&
				operatorPosition != "/") {
				result.value += " " + this.value + " ";
			} else {
				result.value = value.substr(0, value.length - 3);
				result.value += " " + this.value + " ";
			}
		}
	});
}

clear.addEventListener("mousedown", function(e) {
	e.preventDefault();
	timer = setTimeout(function() {
		result.value = "";
	}, 500);
});

clear.addEventListener("mouseup", function(e) {
	e.preventDefault();
	if (timer) {
		clearTimeout(timer);
	}
});

clear.addEventListener("click", function(e) {
	let
		value = result.value,
		operatorPosition = value[value.length - 2];

	if (result.value === "true" || result.value === "false") {
		result.value = "";
	} else if (operatorPosition != "+" &&
		operatorPosition != "-" &&
		operatorPosition != "*" &&
		operatorPosition != "<" &&
		operatorPosition != ">" &&
		operatorPosition != "/") {
		result.value = value.substr(0, value.length - 1);
	} else {
		result.value = value.substr(0, value.length - 3);
	}
});

equally.addEventListener("click", function(e) {
	let res = eval(result.value);
	result.value = res;
});
