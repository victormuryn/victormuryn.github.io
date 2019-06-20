'use strict';

(function () {
  /* ********  CONSTS   ******** */
  /* ******** VARIABLES ******** */

  /* ********  EXPORT   ******** */
  window.backend = {
    save: function (data, onSuccess) {
      var URL = 'https://js.dump.academy/kekstagram';
      var xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response);
        } else {
          window.backend.onRequestError(xhr.statusText);
        }
      });

      xhr.responseType = 'json';
      xhr.open('POST', URL);
      xhr.send(data);
    },

    load: function (onSuccess) {
      var URL = 'https://js.dump.academy/kekstagram/data';
      var xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function () {
        onSuccess(xhr.response);
      });

      xhr.addEventListener('error', function (err) {
        window.backend.onRequestError(err);
      });

      xhr.responseType = 'json';
      xhr.open('GET', URL);
      xhr.send();
    },

    onRequestError: function (err) {
      document.querySelector('.img-upload__overlay').classList.add('hidden');
      var errorPopUp = document.querySelector('.error');
      var close = errorPopUp.querySelector('.error__button');
      errorPopUp.querySelector('.error__title').textContent = err;

      var errPopUp = new window.PopUp(errorPopUp, close, null);
      errPopUp.openPopUp();
      errPopUp.closeListeners();
    }
  };
})();
