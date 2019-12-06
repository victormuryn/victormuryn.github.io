// Модальне вікно для входу в акаунт
import '../login';
import loginModal from '../modal-login';
import '../loggout';

// modal buy
import buyModal from './modal-buy';

// Меню
import '../menu';

// utils
import {
  findGetParameter
} from '../utils';

// DB
import data from '../db';

// might-like
import './might-like';

// jQuery
window.$ = window.jQuery = require('jquery');

// Slick Slider
window.slick = require(`slick-carousel`);

const id = findGetParameter(`id`),
  product = data[+id],
  photosList = document.querySelector(`.product__photos-list`),
  template = document.querySelector(`#product-photo`).content,
  title = document.querySelector(`.product__title`),
  season = document.querySelector(`.product__additional--season a`),
  gender = document.querySelector(`.product__additional--gender a`),
  category = document.querySelector(`.product__additional--category a`),
  price = document.querySelector(`.product__price`),
  sizes = document.querySelector(`.product__sizes span`),
  description = document.querySelector(`.product__description`),
  buttonBuy = document.querySelector(`.product__buy`),
  fragment = document.createDocumentFragment(),
  SIZES_WRAPPER = document.querySelector(`.modal-buy__sizes-wrapper`),
  STYLES = document.querySelector(`#modal-buy__styles`),
  PRICE = document.querySelector(`.modal-buy__price`),
  COUNT = document.querySelector(`.modal-buy__number-input`),
  DECREASE_BTN = document.querySelector(`.modal-buy__number-button--decrease`),
  INCREASE_BTN = document.querySelector(`.modal-buy__number-button--increase`),
  CANCEL = document.querySelector(`.modal-buy__button--cancel`),
  SUBMIT = document.querySelector(`.modal-buy__button--submit`);

const renderPhoto = url => {
  const copy = template.cloneNode(true);
  copy.querySelector(`.product__photo--webp`).srcset = `img/products/${url}.webp`;
  copy.querySelector(`.product__photo--jpeg`).srcset = `img/products/${url}.jpg`;
  copy.querySelector(`.product__photo`).src = `img/product/${url}.jpg`;
  copy.querySelector(`.product__photo`).alt = product.name;

  return copy;
};

const changePrice = () => {
  PRICE.textContent = `${COUNT.value * product.price} грн.`;
};


document.title = `${product.name} | Dark Clothes`;
title.textContent = product.name;
buyModal.modal.querySelector(`.modal-buy__name`).textContent = product.name;

season.textContent = product.season;
season.href = `catalog.html?season=${product.season}`;

gender.textContent = product.male ? `male` : `female`;
gender.href = `catalog.html?gender=${product.male ? `male` : `female`}`;

category.textContent = product.type;
category.href = `catalog.html?type=${product.type}`;

buttonBuy.addEventListener(`click`, e => {
  e.preventDefault();

  if (localStorage.getItem(`active`) === null) {
    loginModal.openModal();
  } else {
    buyModal.openModal();
  }
});

price.textContent = `${product.price} грн.`;

product.details.description.split(`\n`).forEach(element => {
  const line = document.createElement(`span`);
  line.classList.add(`product__description--line`);
  line.textContent = `- ${element};`;

  description.appendChild(line);
});

sizes.textContent += product.details.size.join(` `);

DECREASE_BTN.addEventListener(`click`, e => {
  e.preventDefault();

  COUNT.value = COUNT.value > 2 ? COUNT.value - 1 : 1;
  changePrice();
});

INCREASE_BTN.addEventListener(`click`, e => {
  e.preventDefault();

  COUNT.value = parseInt(COUNT.value) + 1;
  changePrice();
});

CANCEL.addEventListener(`click`, e => {
  e.preventDefault();

  buyModal.closeModal();
});

changePrice();

document.querySelector(`.modal-buy__picture--webp`).srcset = `img/products/${product.details.images[0]}.webp`;
document.querySelector(`.modal-buy__picture--jpg`).srcset = `img/products/${product.details.images[0]}.jpg`;
document.querySelector(`.modal-buy__img`).src = `img/products/${product.details.images[0]}.jpg`;
document.querySelector(`.modal-buy__img`).alt = product.name;

product.details.size.forEach(element => {
  const INPUT = document.createElement(`input`);
  INPUT.type = `radio`;
  INPUT.name = `size`;
  INPUT.id = element;
  INPUT.value = element;
  INPUT.required = `required`;

  const LABEL = document.createElement(`label`);
  LABEL.htmlFor = element;
  LABEL.textContent = element;

  STYLES.textContent += `#${element}:checked ~ label[for=${element}] { background: #eee; }`;

  SIZES_WRAPPER.appendChild(INPUT);
  SIZES_WRAPPER.appendChild(LABEL);
});

SUBMIT.addEventListener(`click`, e => {
  e.preventDefault();

  const MODAL_FORM_INPUTS = document.querySelectorAll(`.modal-buy__form input`);
  let data = {
    product_id: product.id
  };


  MODAL_FORM_INPUTS.forEach(element => {
    if (element.name == `size` && element.checked == false)
      return;

    data[element.name] = element.value;
  });

  console.log(data);
  data = JSON.stringify(data);
  console.log(data);

  // ТУТ ДАНІ ПОВИНІ ВІДПРАВЛЯТИСЯ НА СЕРВЕР
  document.querySelector(`.modal-buy__form`).reset();
  buyModal.closeModal();
});

product.details.images.forEach(element => {
  fragment.appendChild(renderPhoto(element));
});

photosList.appendChild(fragment);


// init slider
$(`.product__photos-list`).slick({
  prevArrow: `<button type="button" class="slick-prev product__btn">Previous</button`,
  nextArrow: `<button type="button" class="slick-next product__btn">Next</button`,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,

  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      centerMode: true,
    }
  }, {
    breakpoint: 500,
    settings: {
      slidesToShow: 1
    }
  }]
});
