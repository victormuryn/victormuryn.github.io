'use strict';

(function () {
  /* ******** CONSTS ******** */
  var ESC_KEYCODE = 27;
  var COMMENTS_COUNT = 5;

  /* ******** VARIABLES ******** */
  var bigPicture = document.querySelector('.big-picture');
  var closeBtn = bigPicture.querySelector('.big-picture__cancel');
  var commentsList = bigPicture.querySelector('.social__comments');

  /* ******* EXPORT ******** */
  window.preview = function (images) {
    var allPictures = document.querySelectorAll('.picture');
    for (var i = 0; i < allPictures.length; i++) {
      addClickListener(allPictures[i], i, images);
    }
  };

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

  var addClickListener = function (picture, index, images) {
    picture.addEventListener('click', function () {
      bigPictureRender(images[index]);
    });
  };

  var onDocumentKeyDown = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      onCloseClick();
    }
  };
  // Other functions
  var bigPictureRender = function (data) {
    var showComments = data.comments.length > COMMENTS_COUNT ? COMMENTS_COUNT : data.comments.length;
    var loadComments = function (start) {
      showComments = COMMENTS_COUNT + start > data.comments.length ? data.comments.length : COMMENTS_COUNT + start;

      for (var i = start; i < showComments; i++) {
        var commentElement = commentTemplate.cloneNode(true);

        commentElement.querySelector('.social__picture').src = data.comments[i].avatar;
        commentElement.querySelector('.social__text').textContent = data.comments[i].message;

        commentFragment.appendChild(commentElement);
      }

      commentsList.appendChild(commentFragment);
    };

    bigPicture.classList.remove('hidden');

    closeBtn.addEventListener('click', onCloseClick);
    document.addEventListener('keydown', onDocumentKeyDown);

    bigPicture.querySelector('.big-picture__img img').src = data.url;
    bigPicture.querySelector('.likes-count').textContent = data.likes;
    bigPicture.querySelector('.comments-now').textContent = showComments;
    bigPicture.querySelector('.comments-count').textContent = data.comments.length;
    bigPicture.querySelector('.social__caption').textContent = data.description;
    bigPicture.querySelector('.social__footer-text').addEventListener('focus', onInputFocus);
    bigPicture.querySelector('.social__footer-text').addEventListener('blur', onInputBlur);
    bigPicture.querySelector('.social__comments-loader').addEventListener('click', function (evt) {
      evt.preventDefault();
      debugger
      var start = document.querySelectorAll('.social__comment').length;
      loadComments(start);
      bigPicture.querySelector('.comments-now').textContent = showComments;
    });

    var commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
    var commentFragment = document.createDocumentFragment();


    loadComments(0);
  };

  /* ******** CODE ******** */
})();
