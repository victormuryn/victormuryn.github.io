let openPopUp1 = document.querySelector(".openWriteUs"),
writeUsPopUp = document.querySelector(".writeUs"),
closeBtn1 = document.querySelector(".closeBtn"),
inputFocus = document.querySelector("#name"),
closeBtn2 = document.querySelector(".writeUs input[type=submit]"),
openPopUp2 = document.querySelector(".openMapPopUp"),
mapPopUp = document.querySelector(".mapPopUp"),
allWriteUsInputs = document.querySelectorAll(".writeUs input, .writeUs textarea"),
closeBtn3 = document.querySelector(".closeBtn2"),
openCatalogPopUp = document.querySelectorAll(".catalogBookmarks"),
catalogPopUp = document.querySelector(".catalogPopUp"),
closeBtn4 = document.querySelector(".closeBtn4"),
closeBtn5 = document.querySelector(".closeBtn5");

if (openPopUp1) {
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

} else {
	for (let i = 0; i < openCatalogPopUp.length; i++) {
		openCatalogPopUp[i].addEventListener('click', function (e) {
			e.preventDefault();
			catalogPopUp.classList.add("showPopUp");
	});
	}
	closeBtn4.addEventListener('click', function (e) {
		e.preventDefault();
		catalogPopUp.classList.remove("showPopUp");
	});
	closeBtn5.addEventListener('click', function (e) {
		e.preventDefault();
		catalogPopUp.classList.remove("showPopUp");
	});
}