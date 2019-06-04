'use strict';

(function () {
  /* ******** CONSTS ******** */
  var ESC_KEYCODE = 27;

  /* ******** VARIABLES ******** */
  var bigPicture = document.querySelector('.big-picture');
  var closeBtn = bigPicture.querySelector('.big-picture__cancel');
  var allPictures = document.querySelectorAll('.picture');
  var commentsList = bigPicture.querySelector('.social__comments');

  /* ******* EXPORT ******** */

  /* ******* FUNCTIONS ******** */
  // addEventListener functions
  var onInputFocus = function () {
    document.removeEventListener('keydown', onDocumentKeyDown);
  };

  var onInputBlur = function () {
    document.addEventListener('keydown', onDocumentKeyDown);
  };

  var onCloseClick = function () {
    bigPicture.classList.add('hidden');
    closeBtn.removeEventListener('click', onCloseClick);
    document.removeEventListener('keydown', onDocumentKeyDown);

    bigPicture.querySelector('input').value = '';
    var comments = bigPicture.querySelectorAll('.social__comment');
    for (var i = 0; i < comments.length; i++) {
      commentsList.removeChild(comments[i]);
    }
  };

  var addClickListener = function (picture, index) {
    picture.addEventListener('click', function () {
      bigPictureRender(window.picture[index]);
    });
  };

  var onDocumentKeyDown = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      onCloseClick();
    }
  };
  // Other functions
  var bigPictureRender = function (data) {
    bigPicture.classList.remove('hidden');

    closeBtn.addEventListener('click', onCloseClick);
    document.addEventListener('keydown', onDocumentKeyDown);

    bigPicture.querySelector('.big-picture__img img').src = data.url;
    bigPicture.querySelector('.likes-count').textContent = data.likes;
    bigPicture.querySelector('.comments-count').textContent = data.comments.length;
    bigPicture.querySelector('.social__caption').textContent = data.description;
    bigPicture.querySelector('.social__footer-text').addEventListener('focus', onInputFocus);
    bigPicture.querySelector('.social__footer-text').addEventListener('blur', onInputBlur);

    var commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
    var commentFragment = document.createDocumentFragment();

    for (var i = 0; i < data.comments.length; i++) {
      var commentElement = commentTemplate.cloneNode(true);

      commentElement.querySelector('.social__picture').src = 'img/avatar-' + window.data.chooseNumberBetweenTwoNumbers(1, 6) + '.svg';
      commentElement.querySelector('.social__text').textContent = data.comments[i];

      commentFragment.appendChild(commentElement);
    }

    commentsList.appendChild(commentFragment);
  };

  /* ******** CODE ******** */
  document.querySelector('.social__comment-count').classList.add('visually-hidden');
  document.querySelector('.social__comments-loader').classList.add('visually-hidden');

  console.log(allPictures);
  
  for (var i = 0; i < allPictures.length; i++) {
    addClickListener(allPictures[i], i);
  }
})();
