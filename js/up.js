'use strict';

(function () {
  /* ********  CONSTS   ******** */
  /* ******** VARIABLES ******** */
  // HTMLELements
  var upWrapper = document.querySelector('.up');

  // Other variables
  var minHeight = document.documentElement.clientHeight / 2.5;

  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions

  /* ********   CODE   ******** */
  document.addEventListener('scroll', function () {

    if (window.pageYOffset >= minHeight) {
      upWrapper.style.opacity = "1";
      upWrapper.style.visibility = "visible";
    } else {
      upWrapper.style.opacity = "0";
      upWrapper.style.visibility = "hidden";
    }
     sprite

  });

})();
