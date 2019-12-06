// Data
import data from '../db';

// Utils
import {findGetParameter} from '../utils';

const itemsOnPage = 12,
  addCount = 4,
  catalog = document.querySelector(`.catalog__list`),
  template = document.querySelector(`#catalog-item`),
  addBtn = document.querySelector(`.catalog__load-more`);

let lastItem = 0,
  catalogList = data;

const renderItem = element => {
  const cloneElement = template.cloneNode(true).content.querySelector(`li`);

  cloneElement.querySelector(`.catalog__item-link`).href = `./product.html?id=${element.id}`;
  cloneElement.querySelector(`.catalog__item-src--webp`).srcset = `img/products/${element.details.images[0]}.webp`;
  cloneElement.querySelector(`.catalog__item-src--jpg`).srcset = `img/products/${element.details.images[0]}.jpg`;
  cloneElement.querySelector(`.catalog__item-img`).src = `img/products/${element.details.images[0]}.jpg`;
  cloneElement.querySelector(`.catalog__item-img`).alt = element.name;

  cloneElement.querySelector(`.catalog__item-name`).textContent = element.name;
  cloneElement.querySelector(`.catalog__item-season span`).textContent = element.season;
  cloneElement.querySelector(`.catalog__item-price--price`).textContent = `${element.price} грн.`;

  return cloneElement;
};

const renderList = (count = addCount, start = 0) => {
  const fragment = new DocumentFragment();

  for (let i = start; i < count + start; i++) {
    const element = catalogList[i];
    element ? fragment.appendChild(renderItem(element)) : addBtn.remove();
  }

  lastItem += count;
  catalog.appendChild(fragment);
};


const checkSeason = list => {
  switch (findGetParameter(`season`)) {
    case `winter`:
      list = list.filter(item => item.season === `winter` || item.season === `all`);
      break;
    case `autumn-spring`:
      list = list.filter(item => item.season === `autumn-spring` || item.season === `all`);
      break;
    case `summer`:
      list = list.filter(item => item.season === `summer` || item.season === `all`);
      break;
  }

  return list;
}

if (findGetParameter(`gender`) === `male`)
  catalogList = catalogList.filter(item => item.male);
else if (findGetParameter(`gender`) === `female`)
  catalogList = catalogList.filter(item => !item.male);

if (findGetParameter(`season`))
  catalogList = checkSeason(catalogList)

if (findGetParameter(`type`))
  catalogList = catalogList.filter(item => item.type === findGetParameter(`type`));

if (findGetParameter(`search_query`) !== null)
  catalogList = data.filter(item => item.name.toLowerCase().match(findGetParameter(`search_query`).replace(`+`, ` `).toLowerCase()));


renderList(itemsOnPage);

addBtn.addEventListener(`click`, e => {
  e.preventDefault();

  renderList(undefined, lastItem);
});

