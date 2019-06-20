'use strict';

(function () {
  /* ********  CONSTS   ******** */
  var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var CHECKS = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var MAX_X = 1200;
  var MIN_X = 0;
  var OFFERS_COUNT = 8;

  /* ******** VARIABLES ******** */
  var pinTemplate = document.querySelector('#pin').content;
  var cardTempate = document.querySelector('#card').content;
  var map = document.querySelector('.map');

  var typeToValue = {
    'flat': 'Квартира',
    'bungalo': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец'
  };

  /* ********  EXPORT   ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions

  // Other functions
  var createRandomNumber = function (min, max) {
    return Math.round(min + Math.random() * (max - min));
  };

  var chooseRandomFromArray = function (array) {
    var item = Math.floor(Math.random() * array.length);

    return array[item];
  };

  var createFromRandomItems = function (count, array) {
    var length = count > array.length ? array.length : count;
    var arr = [];
    var used = [];
    var item = '';

    for (let i = 0; i < length; i++) {
      do {
        item = chooseRandomFromArray(array);
      } while (used.includes(item));
      used.push(item);
      arr.push(item);
    };

    return arr;
  }

  var createOffer = function (index) {
    var newOffer = {
      author: {
        avatar: 'img/avatars/user0' + createRandomNumber(1, 8) + '.png',
      },
      offer: {
        title: TITLES[index],
        price: createRandomNumber(1000, 1000000),
        type: chooseRandomFromArray(TYPES),
        rooms: createRandomNumber(1, 5),
        guests: Math.round(Math.random() * 10),
        checkin: chooseRandomFromArray(CHECKS),
        checkout: chooseRandomFromArray(CHECKS),
        features: createFromRandomItems(createRandomNumber(1, FEATURES.length), FEATURES),
        description: '',
        photos: createFromRandomItems(PHOTOS.length, PHOTOS),
      },
      location: {
        x: createRandomNumber(MIN_X, MAX_X),
        y: createRandomNumber(130, 630),
      }
    };

    newOffer.offer.address = newOffer.location.x + ', ' + newOffer.location.y;


    return newOffer;
  };

  var createElement = function (tagname, className, text) {
    var element = document.createElement(tagname);

    if (className) {
      for (let i = 0; i < className.length; i++) {
        element.classList.add(className[i]);
      }
    }

    if (text)
      element.textContent = text;

    return element;
  };

  var createCard = function (data) {
    var clone = cardTempate.cloneNode(true);

    clone.querySelector('.popup__avatar').src = data.author.avatar;
    clone.querySelector('.popup__title').textContent = data.offer.title;
    clone.querySelector('.popup__text--address').textContent = data.offer.address;
    clone.querySelector('.popup__text--price').textContent = data.offer.price + '₽/ночь';
    clone.querySelector('.popup__type').textContent = typeToValue[data.offer.type];
    clone.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей.';
    clone.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
    clone.querySelector('.popup__features').textContent = '';
    clone.querySelector('.popup__description').textContent = data.offer.description;
    clone.querySelector('.popup__photos').textContent = '';

    for (let i = 0; i < data.offer.features.length; i++) {
      var feature = createElement('li', ['popup__feature--' + data.offer.features[i], 'popup__feature']);
      clone.querySelector('.popup__features').appendChild(feature);
    }

    for (let i = 0; i < data.offer.photos.length; i++) {
      var photos = createElement('img', ['popup__photo']);
      photos.src = data.offer.photos[i];
      clone.querySelector('.popup__photos').appendChild(photos);
    }

    var filtersContainer = document.querySelector('.map__filters--container');
    map.insertBefore(clone, filtersContainer);
  }

  var createPin = function (data) {
    var clone = pinTemplate.cloneNode(true);

    clone.querySelector('.map__pin').style.left = data.location.x - 25 + 'px';
    clone.querySelector('.map__pin').style.top = data.location.y - 35 + 'px';

    clone.querySelector('img').src = data.author.avatar;
    clone.querySelector('img').alt = data.offer.title;

    return clone;
  }

  /* ********   CODE   ******** */
  var similarOffers = [];
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < OFFERS_COUNT; i++) {
    similarOffers.push(createOffer(i));

    fragmets.appendChild( createPin(similarOffers[i]) );
  }

  document.querySelector('.map__pins').appendChild(fragment);


  // createCard(similarOffers[0]);

})();
