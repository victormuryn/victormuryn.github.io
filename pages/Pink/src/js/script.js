let
	pageNavNoJs = document.querySelector(".page-nav__list"),
	menuButton = document.querySelector(".page-header__menu-button"),
	mainNav = document.querySelector(".page-nav__list"),
	headerLogoWrapper = document.querySelector(".header__logo-wrapper")
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
