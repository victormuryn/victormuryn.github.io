'use strict';

(function () {
  /********* Consts ******** */
  var EFFECTS_LINE_WIDTH = 453;

  /* ******** Variables ******** */
  var uploadInput = document.querySelector('#upload-file');
  var customImg = document.querySelector('.img-upload__overlay');
  var scalePin = document.querySelector('.effect-level__pin');
  var effectDepth = document.querySelector('.effect-level__depth');
  var imgUpload = document.querySelector('.img-upload__preview img');
  var cancelUpload = document.querySelector('#upload-cancel');
  var filters = document.querySelectorAll('.effects__item');
  var currentFilter = 'grayscale';

  /* ******** Functions ******** */
  var onCloseClick = function () {
    customImg.classList.add('hidden');
    cancelUpload.removeEventListener('click', onCloseClick);
    uploadInput.addEventListener('change', onOpenCustomImgClick);
    uploadInput.value = '';
  }

  var onOpenCustomImgClick = function () {
    customImg.classList.remove('hidden');
    cancelUpload.addEventListener('click', onCloseClick);
    uploadInput.removeEventListener('change', onOpenCustomImgClick);
  };

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
  }

  /* ******** Upload code ******** */
  uploadInput.addEventListener('change', onOpenCustomImgClick);

  for (let i = 0; i < filters.length; i++) {
    addClickListener(filters[i]);
  }

  scalePin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordsX = evt.clientX;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shiftX = startCoordsX - moveEvt.clientX;
      startCoordsX = moveEvt.clientX;
      var pos = scalePin.offsetLeft - shiftX;

      if (pos < 0) {
        pos = 0
      } else if (pos > EFFECTS_LINE_WIDTH) {
        pos = EFFECTS_LINE_WIDTH;
      }
      scalePin.style.left = pos + 'px';
      effectDepth.style.width = pos + 'px';
      var percent = pos * 100 / EFFECTS_LINE_WIDTH

      switch (currentFilter) {
        case 'phobos':
          percent = pos * 3 / EFFECTS_LINE_WIDTH
          imgUpload.style.filter = 'blur(' + percent + 'px)';
          break;
        case 'chrome':
          imgUpload.style.filter = 'grayscale(' + percent / 100 + ')';
          break;
        case 'sepia':
          imgUpload.style.filter = 'sepia(' + percent / 100 + ')';
          break;
        case 'marvin':
          percent = pos * 100 / EFFECTS_LINE_WIDTH;
          imgUpload.style.filter = 'invert(' + percent + '%)';
          break;
        case 'heat':
          percent = pos * 3 / EFFECTS_LINE_WIDTH
          imgUpload.style.filter = 'brightness(' + percent + ')';
          break;
        default:
          imgUpload.style.filter = 'none';
          break;
      }
    };

    var onMouseUp = function (evt) {
      evt.preventDefault()

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
