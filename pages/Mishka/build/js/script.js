let nav = document.querySelector(".navigation"),
toggle = document.querySelector(".header__menu-toggle"),
close = document.querySelector(".header__menu-open"),
open = document.querySelector(".header__menu-close"),
modal = document.querySelector(".modal"),
modalOpen = document.querySelector(".goods__button"),
modalClose = document.querySelector(".modal__button"),
parallaxText = document.querySelector(".main__text");

nav.classList.remove("navigation--open");
close.classList.add("header__menu-toggle--hidden");
open.classList.remove("header__menu-toggle--hidden");

toggle.addEventListener("click", function(e) {
	e.preventDefault();
	nav.classList.toggle("navigation--open");
	close.classList.toggle("header__menu-toggle--hidden");
	open.classList.toggle("header__menu-toggle--hidden");
})

modalOpen.addEventListener("click", function(e) {
	e.preventDefault();
	modal.classList.add("modal--open");
})

modalClose.addEventListener("click", function(e) {
	e.preventDefault();
	modal.classList.remove("modal--open");
})

window.onscroll = function() {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  parallaxText.style.transform = "translateY(-" + scrolled / 3 + "px)";
}
