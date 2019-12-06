// зразок модального вікна
import {Modal} from './utils';

// модальне вікно регістрації
import "./register";
import registerModal from "./modal-register";


const modalElement = document.querySelector(`.modal-login`); // саме модальне вікно
const modalLogin = new Modal(modalElement); // створюю об'єкт модального вікна

const modalClose = document.querySelector(`.modal__close--login`);
const openRegister = document.querySelector(`.modal__link-login`);

modalClose.addEventListener(`click`, e => {
  e.preventDefault();

  modalLogin.closeModal(); // закрити
});

openRegister.addEventListener(`click`, e => { // при кліці на відкриття РЕГІСТРАЦІЇ
  e.preventDefault();

  modalLogin.closeModal(); // вхід закрити
  registerModal.openModal(); // регістрацію вікдрити
});

// Модальне вікно
const openModal = document.querySelector(`.header__user-login`);
openModal.addEventListener(`click`, e => {
  e.preventDefault();

  modalLogin.openModal(); // відкрити вікно
});

export default modalLogin; // експортую модальне вікно входу
