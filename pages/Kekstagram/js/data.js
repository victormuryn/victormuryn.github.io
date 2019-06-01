'use strict';

(function () {
  /* ******** Consts ******** */
  var DESCRIPTIONS = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];
  var COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  var MIN_COMMMENTS = 1;
  var MAX_COMMENTS = 10;
  var IMAGES_COUNT = 75;
  var MIN_LIKES = 15;
  var MAX_LIKES = 999;
  var USED_URLS = [];

  /* ******** EXPORT ******** */
  window.data = {
    chooseRandomItemFromArray: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    chooseNumberBetweenTwoNumbers: function (min, max) {
      return Math.round(min + Math.random() * (max - min));
    },

    images: []
  };

  /* ******** Functions ******** */
  // addEventListener functions
  // other functions
  var createUlrs = function () {
    do {
      var url = window.data.chooseNumberBetweenTwoNumbers(1, IMAGES_COUNT);
    } while (USED_URLS.includes(url));

    USED_URLS.push(url);
    return 'photos/' + url + '.jpg';
  };

  var renderComments = function () {
    var commentsList = [];
    var commentsCount = window.data.chooseNumberBetweenTwoNumbers(MIN_COMMMENTS, MAX_COMMENTS);

    for (var i = 0; i < commentsCount; i++) {
      if (Math.floor(Math.random() * 2)) {
        commentsList.push(window.data.chooseRandomItemFromArray(COMMENTS));
      } else {
        commentsList.push(window.data.chooseRandomItemFromArray(COMMENTS) + ' ' + window.data.chooseRandomItemFromArray(COMMENTS));
      }
    }

    return commentsList;
  };

  var createImage = function () {
    var image = {
      url: createUlrs(),
      likes: window.data.chooseNumberBetweenTwoNumbers(MIN_LIKES, MAX_LIKES),
      comments: renderComments(),
      description: window.data.chooseRandomItemFromArray(DESCRIPTIONS)
    };

    return image;
  };

  /* ******** Code ******** */
  for (var i = 0; i < IMAGES_COUNT; i++) {
    window.data.images.push(createImage());
  }
})();
