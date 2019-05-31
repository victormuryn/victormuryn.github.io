'use strict';

(function () {
  window.basic = {
    chooseNumberBetweenTwoNumbers: function (min, max) {
      return Math.round(min + Math.random() * (max - min));
    },

    chooseRandomItemFromArray: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },

    escKeyCode: 27,
    enterKeyCode: 13
  };
})();
