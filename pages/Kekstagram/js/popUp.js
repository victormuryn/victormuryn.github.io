'use strict';

(function () {
  var ESC_CODE = 27;

  window.PopUp = function (popUp, close, open) {
    this._popUp = popUp;
    this._close = close;
    this._open = open;
  };

  window.PopUp.prototype.openPopUp = function () {
    var popUp = this._popUp;
    var close = this.closePopUp;

    var onEscKeydown = function (evt) {
      if (evt.keyCode === ESC_CODE) {
        evt.preventDefault();
        close(popUp);
        document.removeEventListener('keydown', onEscKeydown);
      }
    };
    document.addEventListener('keydown', onEscKeydown);
    this._popUp.classList.remove('hidden');
  };

  window.PopUp.prototype.closePopUp = function (element) {
    element.classList.add('hidden');
  };
  window.PopUp.prototype.closeListeners = function () {
    var popUp = this._popUp;
    var close = this.closePopUp;

    this._close.addEventListener('click', function (evt) {
      evt.preventDefault();
      close(popUp);
    });
  };

  window.PopUp.prototype.openListeners = function () {
    var popUp = this._popUp;
    var close = this.closePopUp;
    var escCode = this._escKeycode;

    this._open.addEventListener('click', function (evt) {
      evt.preventDefault();
      popUp.classList.remove('hidden');
      document.addEventListener('keydown', onEscKeydown);
    });

    var onEscKeydown = function (evt) {
      if (evt.keyCode === escCode) {
        evt.preventDefault();
        close(popUp);
        document.removeEventListener('keydown', onEscKeydown);
      }
    };
  };
})();
