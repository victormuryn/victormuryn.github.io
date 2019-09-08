'use strict';

(function () {

  /* ********  CONSTS   ******** */
  /* ******** VARIABLES ******** */
  // HTMLElements
  const works = document.querySelectorAll(`.project`);
  const technologies = document.querySelectorAll(`.technologies__item`);

  // Other variables
  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions
  /* ********   CODE   ******** */

  if (technologies)
    new window.Animate(technologies, `technologies__item--animated`);

})();