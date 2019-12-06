const menu = document.querySelector(`.nav__list-wrapper`);
const burgerMenuOpen = document.querySelector(`.nav__burger-menu`);
const burgerMenuClose = document.querySelector(`.nav__burger-menu--close`);
const menuElements = menu.querySelectorAll(`li`);

const closeMenu = () => {
  menu.classList.remove(`nav__list-wrapper--open`);
  burgerMenuClose.removeEventListener(`click`, closeMenu);

  menuElements.forEach(element => {
    element.removeEventListener(`click`, closeMenu);
  });
}

burgerMenuOpen.addEventListener(`click`, e => {
  e.preventDefault();

  menu.classList.add(`nav__list-wrapper--open`);

  burgerMenuClose.addEventListener(`click`, closeMenu);

  menuElements.forEach(element => {
    element.addEventListener(`click`, closeMenu);
  });
});
