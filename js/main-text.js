'use strict';

(function () {
  /* ********  CONSTS   ******** */
  const COLORS = ['#FF8A47', '#8CEEEE', '#FC6170', '#E59DE6', '#FFD747', '#4CAF50']
  const TITLE_TEXT = document.querySelector('.header__title').textContent;
  const MS_TO_CHANGE_COLOR = 500;
  const TEXT_COLOR = 'rgba(255, 255, 255, .3)';

  /* ******** VARIABLES ******** */
  // HTMLElements
  const title = document.querySelector('.header__title');

  // Other variables

  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions
  const chooseRandomFromArray = (array) => array[ Math.floor( Math.random() * array.length ) ];

  /**
   * @param {string} tagname
   * @param {array} class - classes list
   * @param {text} text
   *
   * @return new HTMLTagnameElement
   */
  const createTag = (tagname, classes, text) => {
    const element = document.createElement(tagname);

    if (classes) {
      classes.forEach((className) => {
        element.classList.add(className);
      });
    }

    if (text)
      element.textContent = text;

    return element;
  };
  /* ********   CODE   ******** */
  title.textContent = '';

  for (let i = 0; i < TITLE_TEXT.length; i++) {
    const letter = createTag('span', ['header__letter'], TITLE_TEXT[i]);

    if (letter.textContent !== '') {
      letter.dataset.color = chooseRandomFromArray(COLORS);

      letter.addEventListener('mouseover', () => {
        letter.style.color = letter.dataset.color;

        setTimeout(() => {
          letter.style.transition = 'color 3s 1s';
          letter.style.color = TEXT_COLOR;
        }, MS_TO_CHANGE_COLOR);

        letter.style.transition = '';
      });

    }

    title.appendChild(letter);
  }
})();
