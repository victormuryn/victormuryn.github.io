'use strict';

(function () {
  /* ********  CONSTS   ******** */
  /* ******** VARIABLES ******** */
  // HTMLElements
  var works = document.querySelectorAll('.project');
  var technologies = document.querySelectorAll('.technologies__item');

  // Other variables
  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions
  /* ********   CODE   ******** */

  if (works)
    new window.Animate(works, 'project--animated');

  if (technologies)
    new window.Animate(technologies, 'technologies__item--animated');
})();
