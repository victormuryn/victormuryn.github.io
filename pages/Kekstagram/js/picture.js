'use strict';

(function () {
  /* ******** CONSTS ******** */
  /* ******** VARIABLES ******** */
  var picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

  /* ******** EXPORT ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // other functions
  var renderImage = function (image) {
    var imageElement = picturesTemplate.cloneNode(true);

    imageElement.querySelector('.picture__img').src = image.url;
    imageElement.querySelector('.picture__likes').textContent = image.likes;
    imageElement.querySelector('.picture__comments').textContent = image.comments.length;

    return imageElement;
  };
  /* ******** CODE ******** */
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < window.data.images.length; i++) {
    fragment.appendChild(renderImage(window.data.images[i]));
  }

  var pictures = document.querySelector('.pictures');
  pictures.appendChild(fragment);
})();
