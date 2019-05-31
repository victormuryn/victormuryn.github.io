'use strict';

(function () {
  /* ******** Consts ******** */
  /* ******** Variables ******** */
  var submit = document.querySelector('.img-upload__submit');

  /* ******** Functions ******** */
  var onSubmitClick = function (evt) {
    evt.preventDefault();
    
  }

  /* ******** Code ******** */
  submit.addEventListener('click', onSubmitClick);
})();
