import normalize from 'normalize.css';

let inputs = document.querySelectorAll(`input[name="menu"]`);
let header = document.querySelector(`.header`);
let articles = document.querySelectorAll(`.blog__article`);
let prevBtn = document.querySelector(`.blog__pages-button--prev`);
let nextBtn = document.querySelector(`.blog__pages-button--next`);
let currentPage = document.querySelector(`.blog__pages-text--current`);

document.querySelector(`.blog__pages-text--total`).textContent = `0${articles.length}`;

for (let i = 0; i < inputs.length; i++) {
  const element = inputs[i];

  element.addEventListener(`change`, (e) => {
    e.preventDefault();
    header.style.backgroundImage = `url("../img/slider${element.value}.png"), linear-gradient(75deg, #e9e9e9 0%, #e9e9e9 50%, #82f4d3 50%, #82f4d3 100%)`;
  });
}

setInterval(() => {
  let active = +document.querySelector(`.header__nav-menu-input:checked`).value;
  console.log(active);
  let newActive = active == inputs.length ? 1 : active + 1;

  inputs[newActive - 1].checked = `checked`;
  header.style.backgroundImage = `url("./img/slider${newActive}.png"), linear-gradient(75deg, #e9e9e9 0%, #e9e9e9 50%, #82f4d3 50%, #82f4d3 100%)`;
}, 10000);


window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  header.style.backgroundPosition = `center bottom ${scrolled / 3 + 100}px, 0 0`;
}

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let currentPageNum = +currentPage.textContent;

  if (currentPageNum != articles.length) {
    currentPage.textContent = `0${currentPageNum + 1}`;
    document.querySelector(`.blog__article--active`).classList.remove(`blog__article--active`);
    articles[currentPageNum].classList.add(`blog__article--active`);
  }
})

prevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let currentPageNum = +currentPage.textContent;

  if (currentPageNum != 1) {
    currentPage.textContent = `0${currentPageNum - 1}`;
    document.querySelector(`.blog__article--active`).classList.remove(`blog__article--active`);
    articles[currentPageNum - 2].classList.add(`blog__article--active`);
  }
})
