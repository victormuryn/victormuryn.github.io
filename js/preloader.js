'use strict';

(function () {
  /* ********  CONSTS   ******** */
  /* ******** VARIABLES ******** */
  // HTMLElements
  var images = document.images;
  var preloader = document.querySelector('.preloader');

  // Other variables
  var imagesTotalCount = images.length;
  var imagesLoadedCount = 0;

  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  var imageLoaded = function () {
    imagesLoadedCount++;
    preloader.style.width = Math.ceil((100 / imagesTotalCount) * imagesLoadedCount) + '%';

    if (imagesLoadedCount >= imagesTotalCount) {
      setTimeout(function () {
        preloader.classList.add('preloader--done');
      }, 1000);
    }
  };

  // Other functions
  /* ********   CODE   ******** */

  if (imagesTotalCount <= 0) {
    preloader.style.width = '100%';
    setTimeout(function () {
      preloader.classList.add('preloader--done');
    }, 1000);
  } else {
    for (let i = 0; i < imagesTotalCount; i++) {
      var imageClone = new Image();
      imageClone.addEventListener('load', imageLoaded);
      imageClone.addEventListener('error', imageLoaded);
      imageClone.src = images[i].src;
    }
  }
})();
