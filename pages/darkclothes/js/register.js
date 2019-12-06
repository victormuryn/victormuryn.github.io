import registerModal from './modal-register';
import checkLog from './loginUser';

const form = document.querySelector(`#register-form`);
const email = form.querySelector(`input[name=email]`);

email.addEventListener(`blur`, e => {
  if (localStorage.getItem(e.target.value) !== null) {
    email.setCustomValidity(`Користувач з данним ім'ям уже зареєстрований`);
  }
});

form.addEventListener(`submit`, e => {
  e.preventDefault();

  const user = {};

  for (const element of form) {
    if (element.name) {
      user[element.name] = element.value;
    }
  }

  localStorage.setItem(user.email, JSON.stringify(user));
  localStorage.setItem(`active`, JSON.stringify(user));
  checkLog();
  registerModal.closeModal();
});
