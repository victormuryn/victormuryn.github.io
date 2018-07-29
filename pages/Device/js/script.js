window.onload = function() {
	let 
		openWriteUs = document.querySelector(".openWriteUs"),
		writeUs = document.querySelector(".writeUs"),
		closeWriteUs = document.querySelector(".closeWriteUs"),
		writeUsSubmit = document.querySelector(".writeUsSubmit"),
		allInputs = document.querySelectorAll(".writeUs input, .writeUs textarea");
	let 
		mapPopUp = document.querySelector(".mapPopUp"),
		openMapPopUp = document.querySelector(".openMap"),
		closeMapPopUp = document.querySelector(".closeMapPopUp");

		openWriteUs.addEventListener("click", function(e) {
			e.preventDefault();
			writeUs.classList.add("popUpOpen");
		});
		closeWriteUs.addEventListener("click", function(e) {
			e.preventDefault();
				writeUs.classList.remove("popUpOpen");
		});
		writeUsSubmit.addEventListener("click", function(e) {
			e.preventDefault();
			let count = 0;
			for (var i = 0; i < allInputs.length; i++) {
				if (allInputs[i].value == "") {
					allInputs[i].classList.add("invalidInput");
					count++;
					break;
				} else {
					allInputs[i].classList.remove("invalidInput");
				}
				if ((i + 1) == allInputs.length && count == 0) {
					writeUs.classList.remove("popUpOpen");
					for (var i = 0; i < allInputs.length; i++) {
						allInputs[i].value = "";
					}
				}
			}
		});

		openMapPopUp.addEventListener("click", function(e) {
			e.preventDefault();
			mapPopUp.classList.add("popUpOpen");
		});
		closeMapPopUp.addEventListener("click", function(e) {
			e.preventDefault();
			mapPopUp.classList.remove("popUpOpen");
		});
}