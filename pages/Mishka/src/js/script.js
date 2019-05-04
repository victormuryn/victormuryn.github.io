let nav = document.querySelector(".navigation"),
toggle = document.querySelector(".header__menu-toggle"),
close = document.querySelector(".header__menu-open"),
open = document.querySelector(".header__menu-close");

nav.classList.remove("navigation--open");
close.classList.add("header__menu-toggle--hidden");
open.classList.remove("header__menu-toggle--hidden");

toggle.addEventListener("click", function(e) {
	e.preventDefault();
	nav.classList.toggle("navigation--open");
	close.classList.toggle("header__menu-toggle--hidden");
	open.classList.toggle("header__menu-toggle--hidden");
})
