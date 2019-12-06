// зразок модального вікна
import {Modal} from './utils';
// модальне вікно входу
import loginModal from './modal-login';

const modalElement = document.querySelector(`.modal-register`); // модальне вікно регістрації
const registerModal = new Modal(modalElement); // об'єкт модального вікна регістрації

const modalClose = document.querySelector(`.modal__close--register`);
const openLogin = document.querySelector(`.modal__link--register`);

modalClose.addEventListener(`click`, e => { // при кліці на закриття
  e.preventDefault();

  registerModal.closeModal(); // закрити
});

openLogin.addEventListener(`click`, e => { // при кліці на вікдриття ВХОДУ
  e.preventDefault();

  registerModal.closeModal(); // закртити регістрацію
  loginModal.openModal(); // відкрити вхід
});

export default registerModal; // експортую модальне вікно
