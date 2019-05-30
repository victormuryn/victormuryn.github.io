'use strict';

// consts
var COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var DESCRIPTIONS = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];
var MIN_LIKES = 15;
var MAX_LIKES = 200;
var MIN_COMMMENTS = 1;
var MAX_COMMENTS = 10;
var IMAGES_COUNT = 75;
var EFFECTS_LINE = 452;
var USED_URLS = [];

// variables
var picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
var images = [];
var bigPicture = document.querySelector('.big-picture');
var uploadInput = document.querySelector('#upload-file');
var customImg = document.querySelector('.img-upload__overlay');
var scalePin = document.querySelector('.effect-level__pin');
var imgUpload = document.querySelector('.img-upload__preview img');
var cancelUpload = document.querySelector('#upload-cancel');

// functions

var openCustomImg = function () {
  customImg.classList.remove('hidden');
};

var chooseRandomItemFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var chooseNumberBetweenTwoNumbers = function (min, max) {
  return Math.round(min + Math.random() * (max - min));
};

var createUlrs = function () {
  var url;

  do {
    url = chooseNumberBetweenTwoNumbers(1, IMAGES_COUNT);
  } while (USED_URLS.includes(url));
  USED_URLS.push(url);

  return url;
};

var renderComments = function () {
  var commentsList = [];
  var commentsCount = chooseNumberBetweenTwoNumbers(MIN_COMMMENTS, MAX_COMMENTS);

  for (var i = 0; i < commentsCount; i++) {
    commentsList.push(Math.floor(Math.random() * 2) === 0 ? chooseRandomItemFromArray(COMMENTS) : chooseRandomItemFromArray(COMMENTS) + ' ' + chooseRandomItemFromArray(COMMENTS));
  }

  return commentsList;
};

var createImage = function (index) {
  var image = {
    // url: 'photos/' + (index + 1) + '.jpg',
    url: 'photos/' + createUlrs() + '.jpg',
    likes: chooseNumberBetweenTwoNumbers(MIN_LIKES, MAX_LIKES),
    comments: renderComments(),
    description: chooseRandomItemFromArray(DESCRIPTIONS)
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

var bigPictureRender = function (data) {
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;

  var commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  var commentFragment = document.createDocumentFragment();

  for (var i = 0; i < data.comments.length; i++) {
    var commentElement = commentTemplate.cloneNode(true);

    commentElement.querySelector('.social__picture').src = 'img/avatar-' + chooseNumberBetweenTwoNumbers(1, 6) + '.svg';
    commentElement.querySelector('.social__text').textContent = data.comments[i];

    commentFragment.appendChild(commentElement);
  }

  bigPicture.querySelector('.social__comments').appendChild(commentFragment);
  bigPicture.querySelector('.social__caption').textContent = data.description;
};

// images code
for (var i = 0; i < IMAGES_COUNT; i++) {
  images.push(createImage(i));
}

var fragment = document.createDocumentFragment();
for (i = 0; i < images.length; i++) {
  fragment.appendChild(renderImage(images[i]));
}

var pictures = document.querySelector('.pictures');
pictures.appendChild(fragment);


// big picture code
document.querySelector('.social__comment-count').classList.add('visually-hidden');
document.querySelector('.social__comments-loader').classList.add('visually-hidden');

// upload code
uploadInput.addEventListener('change', function () {
  openCustomImg();
});

scalePin.addEventListener('mouseup', function () {
  var percent = window.getComputedStyle(scalePin, null).left.slice(0, -2);
  percent = parseFloat(percent) * 100 / EFFECTS_LINE;
  imgUpload.style.filter = 'grayscale(' + percent + '%)';
});

cancelUpload.addEventListener('click', function (evt) {
  evt.preventDefault();
  customImg.classList.add('hidden');
});

