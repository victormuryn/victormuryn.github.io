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

  /* ******** Variables ******** */
  var picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
  window.images = [];

  /* ******** Functions ******** */
  var createUlrs = function () {
    do {
      var url = window.basic.chooseNumberBetweenTwoNumbers(1, IMAGES_COUNT);
    } while (USED_URLS.includes(url));

    USED_URLS.push(url);
    return 'photos/' + url + '.jpg';
  };

  var renderComments = function () {
    var commentsList = [];
    var commentsCount = window.basic.chooseNumberBetweenTwoNumbers(MIN_COMMMENTS, MAX_COMMENTS);

    for (var i = 0; i < commentsCount; i++) {
      if (Math.floor(Math.random() * 2)) {
        commentsList.push(window.basic.chooseRandomItemFromArray(COMMENTS));
      } else {
        commentsList.push(window.basic.chooseRandomItemFromArray(COMMENTS) + ' ' + window.basic.chooseRandomItemFromArray(COMMENTS));
      }
    }

    return commentsList;
  };

  var createImage = function () {
    var image = {
      url: createUlrs(),
      likes: window.basic.chooseNumberBetweenTwoNumbers(MIN_LIKES, MAX_LIKES),
      comments: renderComments(),
      description: window.basic.chooseRandomItemFromArray(DESCRIPTIONS)
    };

    return image;
  };

  var renderImage = function (image) {
    var imageElement = picturesTemplate.cloneNode(true);

    imageElement.querySelector('.picture__img').src = image.url;
    imageElement.querySelector('.picture__likes').textContent = image.likes;
    imageElement.querySelector('.picture__comments').textContent = image.comments.length;

    return imageElement;
  };

  /* ******** Images code ******** */
  for (var i = 0; i < IMAGES_COUNT; i++) {
    window.images.push(createImage());
  }

  var fragment = document.createDocumentFragment();
  for (i = 0; i < window.images.length; i++) {
    fragment.appendChild( renderImage(window.images[i]) );
  }

  var pictures = document.querySelector('.pictures');
  pictures.appendChild(fragment);
})();
