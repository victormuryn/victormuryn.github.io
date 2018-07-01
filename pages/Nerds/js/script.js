let openBtn = document.querySelector(".openButton"),
    closeBtn = document.querySelector(".closePopub"),
    closeBtn2 = document.querySelector(".closeBtn"),
    popUpInput1 = document.querySelector(".popUpInput1"),
    popUpInput2 = document.querySelector(".popUpInput2"),
    popUpInput3 = document.querySelector(".popUpInput3"),
    popUp = document.querySelector(".popUp");
openBtn.addEventListener("click", function(e) {
    e.preventDefault();
    popUp.classList.add("popUpActive");
    popUp.classList.add("popUpAnim");
    popUpInput1.focus();
});
closeBtn.addEventListener("click", function(e) {
    popUp.classList.remove("popUpAnim");
    if (!popUpInput1.value || popUpInput1.value.length <= 1) {
        popUpInput1.classList.add("popUpInputError");
        popUp.classList.toggle("popUpError");
    } else if (!popUpInput2.value || popUpInput2.value.length <= 2) {
        popUpInput2.classList.add("popUpInputError");
        popUp.classList.toggle("popUpError");
    } else if (!popUpInput3.value || popUpInput3.value.length <= 2) {
        popUpInput3.classList.add("popUpInputError");
        popUp.classList.toggle("popUpError");
    } else {
        e.preventDefault();
        popUp.classList.remove("popUpActive");
        popUp.classList.remove("popUpError");
    };
});
popUpInput1.addEventListener("click", function(e) {
    this.classList.remove("popUpInputError");
});
popUpInput2.addEventListener("click", function(e) {
    this.classList.remove("popUpInputError");
});
popUpInput3.addEventListener("click", function(e) {
    this.classList.remove("popUpInputError");
});
closeBtn2.addEventListener("click", function(e) {
    e.preventDefault();
    popUp.classList.remove("popUpActive");
    popUp.classList.remove("popUpError");
});