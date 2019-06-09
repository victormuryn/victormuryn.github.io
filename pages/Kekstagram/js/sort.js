'use strict';

(function () {
  /* ********  CONSTS   ******** */
  var NEW_PICTURES_COUNT = 10;
  var DEBOUNCE_INTERVAL = 500;

  /* ******** VARIABLES ******** */
  var popularBtn = document.querySelector('#filter-popular');
  var newBtn = document.querySelector('#filter-new');
  var discussedBtn = document.querySelector('#filter-discussed');

  /* ********  EXPORT   ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  var onChangeSortClick = function (element, callback) {
    element.addEventListener('click', function (evt) {
      evt.preventDefault();
      clearPictures();
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      element.classList.add('img-filters__button--active');
      callback();
    });
  };

  // Other functions
  var clearPictures = function () {
    var nodes = document.querySelectorAll('.picture');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].parentNode.removeChild(nodes[i]);
    }
  };

  var debounce = function (callback) {
    var lastTimeout = null;

    return function () {
      var args = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        callback.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };

  /* ********   CODE   ******** */
  onChangeSortClick(popularBtn, debounce(function () {
    var pictures = document.querySelector('.pictures');
    var fragment = document.createDocumentFragment();
    window.picture.images.forEach(function (it) {
      fragment.appendChild(window.picture.renderImage(it));
    });

    pictures.appendChild(fragment);
    window.preview(window.picture.images);
  }));

  onChangeSortClick(newBtn, debounce(function () {
    var pictures = document.querySelector('.pictures');
    var fragment = document.createDocumentFragment();
    var used = [];
    var newPictures = [];

    for (var i = 0; i < NEW_PICTURES_COUNT; i++) {
      var index;

      do {
        index = Math.floor(Math.random() * window.picture.images.length);
      } while (used.includes(index));

      used.push(index);
      newPictures.push(window.picture.images[index]);
    }

    newPictures.forEach(function (picture) {
      fragment.appendChild(window.picture.renderImage(picture));
    });

    pictures.appendChild(fragment);
    window.preview(newPictures);
  }));

  onChangeSortClick(discussedBtn, debounce(function () {
    var imagesCopy = window.picture.images.slice();

    imagesCopy.sort(function (left, right) {
      return right.comments.length - left.comments.length;
    });

    var pictures = document.querySelector('.pictures');
    var fragment = document.createDocumentFragment();
    imagesCopy.forEach(function (it) {
      fragment.appendChild(window.picture.renderImage(it));
    });

    pictures.appendChild(fragment);
    window.preview(imagesCopy);
  }));
})();
