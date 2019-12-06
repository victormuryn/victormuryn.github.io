// Data Base
import data from "../db";

// Utils
import { findGetParameter } from "../utils";

const list = document.querySelector(`.might-like__list`),
  similarList = document.querySelector(`.similar__list`),
  template = document.querySelector(`#might-like`).content,
  current = data[findGetParameter(`id`)];

let mightLikeList = [],
  similar = [];

const selectRandomFromArray = array => array[Math.floor(Math.random() * array.length)];

const renderItem = info => {
  const item = template.cloneNode(true);

  item.querySelector(`.might-like__link`).href = `product.html?id=${info.id}`;
  item.querySelector(`.might-like__img--webp`).srcset = `img/products/${info.details.images[0]}.webp`;
  item.querySelector(`.might-like__img--jpg`).srcset = `img/products/${info.details.images[0]}.jpg`;
  item.querySelector(`.might-like__img`).src = `img/products/${info.details.images[0]}.jpg`;
  item.querySelector(`.might-like__img`).alt = info.name;
  item.querySelector(`.might-like__name`).textContent = info.name;
  item.querySelector(`.might-like__price-season span`).textContent = info.season;
  item.querySelector(`.might-like__price--price`).textContent = `${info.price} грн.`;
  item.querySelector(`.might-like__sizes`).textContent = info.details.size.join(` `);

  return item;
};

const renderList = array => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 4 && array.length; i++) {
    const element = selectRandomFromArray(array);
    const item = renderItem(element);
    fragment.appendChild(item);
    array.splice(array.indexOf(element), 1);
  }

  return fragment;
};

mightLikeList = data.filter(element => element.season === current.season && element.male === current.male);
mightLikeList.splice(mightLikeList.indexOf(current), 1);

similar = data.filter(element => element.type == current.type && element.male === current.male);
similar.splice(similar.indexOf(current), 1);

list.appendChild( renderList(mightLikeList) );
similarList.appendChild( renderList(similar) );
