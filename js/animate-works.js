'use strict';

(function () {
  /* ********  CONSTS   ******** */
  var CENTER = document.documentElement.clientHeight / 2;

  /* ******** VARIABLES ******** */
  // HTMLElements
  var works = document.querySelectorAll('.project');
  console.log(works[0]);

  // Other variables

  /* ********  EXPORT   ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions

  // Other functions

  /* ********   CODE   ******** */

  window.addEventListener('scroll', function (e) {
    var centerNow = e.pageY + CENTER;

    for (let i = 0; i < works.length; i++) {
      if (centerNow >= works[i].offsetTop && centerNow <= works[i].offsetTop + works[i].clientHeight)
        works[i].style.transform = 'scale(1.05)';
      else
        works[i].style.transform = 'scale(1)';
    }

  });
})();
