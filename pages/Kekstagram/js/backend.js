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
        onSuccess(xhr.response);
      });

      xhr.addEventListener('error', function (err) {
        window.backend.onRequestError(err);
      });

      xhr.responseType = 'json';
      xhr.open('GET', URL);
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
      var template = document.querySelector('.error').querySelector('.error');

      template.querySelector('.error__title').textContent = err;
      document.querySelector('body').appendChild(template);
    }
  };

  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions
  /* ********   CODE   ******** */
})();
