let
	pageNavNoJs = document.querySelector(".page-nav__list"),
	menuButton = document.querySelector(".page-header__menu-button"),
	mainNav = document.querySelector(".page-nav__list"),
	headerLogoWrapper = document.querySelector(".header__logo-wrapper"),
	form = document.querySelector(".page-form__form"),
	failure = document.querySelector(".failure-pop-up"),
	closeFailure = failure.querySelector(".pop-up__button--failure"),
	succes = document.querySelector(".succes-pop-up"),
	closeSucces = succes.querySelector(".pop-up__button--succes"),
	required = form.querySelectorAll("input[required], textarea[required]"),
	formSubmit = form.querySelector("button[type='submit']");

pageNavNoJs.classList.remove("page-nav__list--no-js");

menuButton.addEventListener("click", function(e) {
	e.preventDefault();
	if (menuButton.classList.contains("page-header__menu-button--open")) {
		menuButton.classList.remove("page-header__menu-button--open");
		menuButton.classList.add("page-header__menu-button--close");
		mainNav.classList.add("page-nav__list--active");
		headerLogoWrapper.classList.remove("header__logo-wrapper--close");
	} else {
		menuButton.classList.add("page-header__menu-button--open");
		menuButton.classList.remove("page-header__menu-button--close");
		mainNav.classList.remove("page-nav__list--active");
		headerLogoWrapper.classList.add("header__logo-wrapper--close");
	}
});

if (form) {
	formSubmit.addEventListener("click", function(e) {
		e.preventDefault();
		for (let i = 0; i < required.length; i++) {
			if (!required[i].value) {
				failure.classList.add("open-pop-up");
				return false;
			}
		}
		succes.classList.add("open-pop-up");
	});

	closeFailure.addEventListener("click", function(e) {
		e.preventDefault();
		failure.classList.remove("open-pop-up");
		for (let i = 0; i < required.length; i++) {
			if (!required[i].value) {
				required[i].focus();
				break;
			}
		}
	});

	closeSucces.addEventListener("click", function(e) {
		e.preventDefault();
		succes.classList.remove("open-pop-up");
	});
}
