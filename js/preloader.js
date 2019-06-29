'use strict';

(function () {
  /* ********  CONSTS   ******** */
  /* ******** VARIABLES ******** */
  // HTMLElements
  const images = document.images;
  const preloader = document.querySelector('.preloader');

  // Other variables
  const imagesTotalCount = images.length;
  let imagesLoadedCount = 0;

  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  const imageLoaded = () => {
    imagesLoadedCount++;
    preloader.style.width = `${Math.ceil((100 / imagesTotalCount) * imagesLoadedCount)}%`;

    if (imagesLoadedCount >= imagesTotalCount) {
      setTimeout(() => {
        preloader.classList.add('preloader--done');
      }, 1000);
    }
  };

  // Other functions
  /* ********   CODE   ******** */

  if (imagesTotalCount <= 0) {
    preloader.style.width = '100%';
    setTimeout(() => {
      preloader.classList.add('preloader--done');
    }, 1000);
  } else {
    for (let i = 0; i < imagesTotalCount; i++) {
      const imageClone = new Image();
      imageClone.addEventListener('load', imageLoaded);
      imageClone.addEventListener('error', imageLoaded);
      imageClone.src = images[i].src;
    }
  }
})();
