import checkLog from './loginUser';

const loggoutBtn = document.querySelector(`.header__user-loggout`);

loggoutBtn.addEventListener(`click`, e => {
  e.preventDefault();

  localStorage.removeItem(`active`);
  checkLog();
});
