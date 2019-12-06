import modalLogin from "./modal-login";
import checkLog from './loginUser';

const form = document.querySelector(`#login-form`);
const email = form.querySelector(`input[name=email]`);
const password = form.querySelector(`input[name=password]`);

form.addEventListener(`submit`, e => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem(email.value));

  if (!user) {
    email.setCustomValidity(`Користувача з таким email не існує`);
  } else if (user.password !== password.value) {
    password.setCustomValidity(`Ви ввели не правильний пароль`);
  } else {
    localStorage.setItem(`active`, JSON.stringify(user));
    checkLog();
    modalLogin.closeModal();
  }
});
