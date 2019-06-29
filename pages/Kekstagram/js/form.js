'use strict';

(function () {
  /* ******** CONSTS ******** */
  var EFFECTS_LINE_WIDTH = 453;
  var ESC_KEYCODE = 27;
  var FILE_EXTENSIONS = ['jpeg', 'jpg', 'png', 'gif'];
  var MAX_SIZE = 5242880; // 2 MB
  var MAX_VALUE = 100;
  var MIN_VALUE = 25;
  var SCALE_STEP = 25;

  /* ******** VARIAVLES ******** */
  var uploadInput = document.querySelector('#upload-file');
  var customImg = document.querySelector('.img-upload__overlay');
  var scalePin = document.querySelector('.effect-level__pin');
  var effectDepth = document.querySelector('.effect-level__depth');
  var imgUpload = document.querySelector('.img-upload__preview img');
  var cancelUpload = document.querySelector('#upload-cancel');
  var filters = document.querySelectorAll('.effects__item');
  var biggerButton = document.querySelector('.scale__control--bigger');
  var smallerButton = document.querySelector('.scale__control--smaller');
  var scaleValue = document.querySelector('.scale__control--value');
  var currentFilter = 'chrome';
  var form = document.querySelector('.img-upload__form');
  var hashtags = document.querySelector('.text__hashtags');
  var comments = document.querySelector('.text__description');
  var previewImg = document.querySelector('.img-upload__preview img');
  var success = document.querySelector('.success');

  /* ******** EXPORT ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  var onInputFocus = function () {
    document.removeEventListener('keydown', onDocumentKeyDown);
  };

  var onInputBlur = function () {
    document.addEventListener('keydown', onDocumentKeyDown);
  };

  var onCloseClick = function () {
    customImg.classList.add('hidden');
    cancelUpload.removeEventListener('click', onCloseClick);
    document.removeEventListener('keydown', onDocumentKeyDown);
    uploadInput.addEventListener('change', onOpenCustomImgClick);
    form.reset();
  };

  var onDocumentKeyDown = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      onCloseClick();
    }
  };

  var onOpenCustomImgClick = function () {
    customImg.classList.remove('hidden');
    cancelUpload.addEventListener('click', onCloseClick);
    document.addEventListener('keydown', onDocumentKeyDown);

    var file = uploadInput.files[0];
    var fileName = file.name.toLowerCase();
    var matches = FILE_EXTENSIONS.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches && file.size <= MAX_SIZE) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        previewImg.src = reader.result;
      });

      reader.readAsDataURL(file);
    }

  };

  var onHashtagBlur = function () {
    var hashtagValue = hashtags.value.split(' ');

    for (var i = 0; i < hashtagValue.length; i++) {
      hashtagValue[i] = hashtagValue[i].toLowerCase();
    }

    hashtagValue.forEach(function (hastag) {
      if (hastag[0] !== '#') {
        hashtags.setCustomValidity('Хэштег должен начинатся с символа #');
      } else if (hastag.length === 1) {
        hashtags.setCustomValidity('Хэштег не может состоять только из одной решётки');
      } else if (hastag.includes('#', 1)) {
        hashtags.setCustomValidity('Хэштеги должны разделятся пробелами');
      } else if (hashtagValue.includes(hastag, i + 1)) {
        hashtags.setCustomValidity('Один и тот же хэштег не может быть использован дважды');
      } else if (hashtagValue.length > 5) {
        hashtags.setCustomValidity('Нельзя указать больше пяти хэштегов');
      } else if (hastag.length > 20) {
        hashtags.setCustomValidity('Максимальная длина одного хэштега 20 символов, включая решётку');
      } else {
        hashtags.setCustomValidity('');
      }
    });
  };

  var onFormSubmit = function (evt) {
    window.backend.save(new FormData(form), function () {
      customImg.classList.add('hidden');
      form.reset();
      success.classList.remove('hidden');
      success.querySelector('.success__button').addEventListener('click', closeSuccessPopUp);
      document.addEventListener('keydown', onEscKeydown);
    });
    evt.preventDefault();
  };
  // other functions
  var addClickListener = function (filter) {
    filter.addEventListener('click', function () {
      currentFilter = filter.querySelector('input').value;

      if (currentFilter === 'none') {
        document.querySelector('.effect-level').style.display = 'none';
      } else {
        document.querySelector('.effect-level').style.display = 'block';
      }
      imgUpload.style.filter = 'none';
      scalePin.style.left = 0 + 'px';
      effectDepth.style.width = 0 + 'px';
    });
  };

  var updateValue = function (value) {
    scaleValue.value = value + '%';
    previewImg.style.transform = 'scale(' + (value / 100) + ')';
  };

  var onEscKeydown = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeSuccessPopUp(evt);
    }

    document.removeEventListener('keydown', onEscKeydown);
  };

  var closeSuccessPopUp = function (evt) {
    evt.preventDefault();
    success.classList.add('hidden');
  };

  /* ******** CODE ******** */
  uploadInput.addEventListener('change', onOpenCustomImgClick);

  for (var i = 0; i < filters.length; i++) {
    addClickListener(filters[i]);
  }

  scalePin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordsX = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shiftX = startCoordsX - moveEvt.clientX;
      startCoordsX = moveEvt.clientX;
      var position = scalePin.offsetLeft - shiftX;

      if (position < 0) {
        position = 0;
      } else if (position > EFFECTS_LINE_WIDTH) {
        position = EFFECTS_LINE_WIDTH;
      }
      scalePin.style.left = position + 'px';
      effectDepth.style.width = position + 'px';
      var percent = position * 100 / EFFECTS_LINE_WIDTH;

      switch (currentFilter) {
        case 'phobos':
          percent = position * 3 / EFFECTS_LINE_WIDTH;
          imgUpload.style.filter = 'blur(' + percent + 'px)';
          break;
        case 'chrome':
          imgUpload.style.filter = 'grayscale(' + percent / 100 + ')';
          break;
        case 'sepia':
          imgUpload.style.filter = 'sepia(' + percent / 100 + ')';
          break;
        case 'marvin':
          percent = position * 100 / EFFECTS_LINE_WIDTH;
          imgUpload.style.filter = 'invert(' + percent + '%)';
          break;
        case 'heat':
          percent = position * 3 / EFFECTS_LINE_WIDTH;
          imgUpload.style.filter = 'brightness(' + percent + ')';
          break;
        default:
          imgUpload.style.filter = 'none';
          break;
      }
    };

    var onMouseUp = function () {
      evt.preventDefault();

      window.card.onMouseUp();
      window.map.onMouseUp();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  form.addEventListener('submit', onFormSubmit);
  comments.addEventListener('focus', onInputFocus);
  hashtags.addEventListener('focus', onInputFocus);
  comments.addEventListener('blur', onInputBlur);
  hashtags.addEventListener('blur', onInputBlur);
  hashtags.addEventListener('blur', onHashtagBlur);
  biggerButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    var value = +scaleValue.value.slice(0, -1);

    if (value >= MAX_VALUE - SCALE_STEP) {
      updateValue(MAX_VALUE);
      return;
    }
    updateValue(value + SCALE_STEP);
  });

  smallerButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    var value = +scaleValue.value.slice(0, -1);

    if (value <= MIN_VALUE + SCALE_STEP) {
      updateValue(MIN_VALUE);
      return;
    }
    updateValue(value - SCALE_STEP);
  });
})();
