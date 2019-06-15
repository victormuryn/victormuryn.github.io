/*
{
  'author': {
   'avatar': строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
   },
  'offer': {
    'title': строка, заголовок предложения, одно из фиксированных значений 'Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'. Значения не должны повторяться.
    'address': строка, адрес предложения, представляет собой запись вида '{{location.x}}, {{location.y}}', например, '600, 350'
    'price': число, случайная цена от 1000 до 1 000 000
    'type': строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo
    'rooms': число, случайное количество комнат от 1 до 5
    'guests': число, случайное количество гостей, которое можно разместить
    'checkin': строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
    'checkout': строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
    'features': массив строк случайной длины из ниже предложенных: 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
    'description': пустая строка,
    'photos': массив из строк 'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg' и 'http://o0.github.io/assets/images/tokyo/hotel3.jpg' расположенных в произвольном порядке
  },
  'location': {
    «x»: случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
    «y»: случайное число, координата y метки на карте от 130 до 630.
  }
}
*/
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

  /* ********  EXPORT   ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions

  // Other functions
  var createRandomNumber = function (min, max) {
    return Math.round( min + Math.random() * (max - min) );
  };

  var chooseRandomFromArray= function (array) {
    var item = Math.round( Math.random() * array.length );

    return array[item];
  };

  var createFromRandomItems = function (count, array) {
    var length = count;
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
    var offer = {
      author: {
        avatar: 'img/avatars/user0' + createRandomNumber(1, 8) + '.png',
      },
      offer: {
        title: TITLES[index],
        address: offer.location.x + ', ' + this.location.y,
        price: createRandomNumber(1000, 1000000),
        type: chooseRandomFromArray(TYPES),
        rooms: createRandomNumber(1, 5),
        guests: Math.round( Math.random() * 10 ),
        checkin: chooseRandomFromArray(CHECKS),
        checkout: chooseRandomFromArray(CHECKS),
        features: createFromRandomItems( createRandomNumber(1, FEATURES.length), FEATURES ),
        description: '',
        photos: createFromRandomItems(PHOTOS.length, PHOTOS),
      },
      location: {
        x: createRandomNumber(MIN_X, MAX_X),
        y: createRandomNumber(130, 630),
      }
    };

    return offer;
  };
  /* ********   CODE   ******** */
  var similarOffrers = [];

  for (var i = 0; i < OFFERS_COUNT; i++) {
    // debugger
    similarOffrers.push(createOffer(i));
  }

  console.log(similarOffrers);
})();
