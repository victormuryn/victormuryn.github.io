'use strict';

(function () {
  /* ******** CONSTS ******** */
  /* ******** VARIABLES ******** */
  var picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

  /* ******** EXPORT ******** */
  window.picture.renderImage = function (image) {
    var imageElement = picturesTemplate.cloneNode(true);

    imageElement.querySelector('.picture__img').src = image.url;
    imageElement.querySelector('.picture__likes').textContent = image.likes;
    imageElement.querySelector('.picture__comments').textContent = image.comments.length;

    return imageElement;
  };

  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // other functions
  /* ******** CODE ******** */
  var fragment = document.createDocumentFragment();
  window.backend.load(function (images) {
    window.picture.images = images;

    window.picture.images.forEach(function (it) {
      fragment.appendChild(window.picture.renderImage(it));
    });

    var pictures = document.querySelector('.pictures');
    pictures.appendChild(fragment);
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    window.preview(window.picture.images);
  });
})();
