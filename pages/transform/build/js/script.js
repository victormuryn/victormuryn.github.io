let
	form = document.querySelector("form"),
	fromType = form.querySelector("#from"),
	fromNumber = form.querySelector("#fromNumber"),
	toType = form.querySelector("#to"),
	toNumber = form.querySelector("#toNumber");

form.addEventListener("submit", function(e) {
	e.preventDefault();
	let
		number = Number(fromNumber.value),
		type = fromType.options.selectedIndex + 1,
		typeToConverte = toType.options.selectedIndex + 1,
		numberConverte,
		power;

	if (type < typeToConverte) {

		power = typeToConverte - type;
		numberConverte = number / Math.pow(1024, power);
		if (type == 1) {
			power--;
			numberConverte = number / Math.pow(1024, power) / 8;
		}

	} else if (type > typeToConverte) {

		power = type - typeToConverte;
		numberConverte = number * Math.pow(1024, power);
		if (typeToConverte == 1) {
			power--;
			numberConverte = number * Math.pow(1024, power) * 8;
		}

	} else {
		numberConverte = number;
	}

	toNumber.textContent = numberConverte;
});
