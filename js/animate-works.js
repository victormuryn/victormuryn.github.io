'use strict';

(function () {
  /* ********  CONSTS   ******** */
  var CENTER = document.documentElement.clientHeight / 2;

  /* ******** VARIABLES ******** */
  // HTMLElements
  var works = document.querySelectorAll('.project');
  var body = document.querySelector('body');

  // Other variables

  /* ********  EXPORT   ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions

  // Other functions
  function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  }

  var onScroll = function (e) {
    // var centerNow = e.pageY + CENTER;
    var centerNow = getBodyScrollTop() + CENTER;


    for (let i = 0; i < works.length; i++) {
      if (centerNow >= works[i].offsetTop && centerNow <= works[i].offsetTop + works[i].clientHeight)
        works[i].style.transform = 'scale(1.05)';
      else
        works[i].style.transform = 'scale(1)';
    }
  }

  /* ********   CODE   ******** */

  document.addEventListener('scroll', onScroll);

  document.addEventListener('touchmove', onScroll);
})();
