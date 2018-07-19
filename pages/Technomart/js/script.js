let openPopUp1 = document.querySelector(".openWriteUs");
let	writeUsPopUp = document.querySelector(".writeUs");
let closeBtn1 = document.querySelector(".closeBtn");
let inputFocus = document.querySelector("#name");
let closeBtn2 = document.querySelector(".writeUs input[type=submit]");
let allWriteUsInputs = document.querySelectorAll(".writeUs input, .writeUs textarea");
let openPopUp2 = document.querySelector(".openMapPopUp");
let mapPopUp = document.querySelector(".mapPopUp");
let closeBtn3 = document.querySelector(".closeBtn2");

openPopUp1.addEventListener('click', function (e) {
	e.preventDefault();
	writeUsPopUp.classList.add("showPopUp");
	inputFocus.focus();
});
closeBtn1.addEventListener('click', function (e) {
	e.preventDefault();
	writeUsPopUp.classList.remove("showPopUp");
});
closeBtn2.addEventListener('click', function (e) {
	e.preventDefault();
	writeUsPopUp.classList.remove("showPopUp");
	for (var i = 0; i < allWriteUsInputs.length; i++) {
		if ((i + 1) != allWriteUsInputs.length){
			allWriteUsInputs[i].value = '';
		};
	};
});
openPopUp2.addEventListener('click', function (e) {
	e.preventDefault();
	mapPopUp.classList.add("showPopUp");
});
closeBtn3.addEventListener('click', function (e) {
	e.preventDefault();
	mapPopUp.classList.remove("showPopUp");
});