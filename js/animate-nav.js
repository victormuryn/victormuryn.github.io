'use strict';

(function () {
  /* ********  CONSTS   ******** */
  /* ******** VARIABLES ******** */
  // HTMLElements
  var links = document.querySelectorAll('.header__nav-link');
  // Other variables

  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions
  /* ********   CODE   ******** */

  for (let i = 0; i < links.length; i++) {
    var text = links[i].textContent;
    links[i].textContent = '';

    for (let j = 0; j < text.length; j++) {
      var letter = document.createElement('span');
      letter.textContent = text[j];
      links[i].appendChild(letter);
    }

    links[i].addEventListener('mouseover', function () {
      var spans = links[i].querySelectorAll('span');

      for (let j = 0; j < spans.length; j++) {
        setTimeout(() => {
          spans[i].classList.add('header__nav-link--animated');
        }, 100);
      }

    });

  }

})();
