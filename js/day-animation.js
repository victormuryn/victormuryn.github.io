'use strict';

(function () {
  /* ******** CONSTS ******** */
  var FROM_NUMBER_TO_DAY = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  var WORDS = ['ace', 'amazing', 'astonishing', 'astounding', 'awe-inspiring', 'awesome', 'badass',
    'beautiful',
    'bedazzling', 'bee\'s knees', 'best', 'breathtaking', 'brilliant', 'cat\'s meow', 'cat\'s pajamas',
    'classy',
    'cool', 'dandy', 'dazzling', 'delightful', 'divine', 'doozie', 'epic', 'excellent', 'exceptional',
    'exquisite',
    'extraordinary', 'fabulous', 'fantastic', 'fantabulous', 'fine', 'finest', 'first-class',
    'first-rate', 'flawless',
    'funkadelic', 'geometric', 'glorious', 'gnarly', 'good', 'grand', 'great', 'groovy',
    'groundbreaking', 'hunky-dory',
    'impeccable', 'impressive', 'incredible', 'kickass', 'kryptonian', 'laudable', 'legendary',
    'lovely', 'luminous',
    'magnificent', 'majestic', 'marvelous', 'mathematical', 'mind-blowing', 'neat', 'outstanding',
    'peachy', 'perfect',
    'phenomenal', 'pioneering', 'polished', 'posh', 'praiseworthy', 'premium', 'priceless', 'prime',
    'primo', 'rad',
    'remarkable', 'riveting', 'sensational', 'shining', 'slick', 'smashing', 'solid', 'spectacular',
    'splendid',
    'stellar', 'striking', 'stunning', 'stupendous', 'stylish', 'sublime', 'super', 'super-duper',
    'super-excellent',
    'super', 'superior', 'supreme', 'sweet', 'swell', 'terrific', 'tiptop', 'top-notch', 'transcendent',
    'tremendous',
    'ultimate', 'unreal', 'well-made', 'wicked', 'wonderful', 'wondrous', 'world-class', 'nice',
    'hilarious',
    'super-excelent'
  ];

  /* ******** VARIABLES ******** */
  // HTMLElements
  var date = document.querySelector('.good-luck__day');
  var wish = document.querySelector('.good-luck__wish');
  var article = document.querySelector('.good-luck__article');

  // Other variables
  var todayDay = new Date().getDay();

  /* ******** EXPORT ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions

  // Other functions
  var chooseRandomFromArray = function (array) {
    var item = Math.floor(Math.random() * array.length);
    return array[item];
  };

  var isVowel = function (letter) {
    letter = letter.toLowerCase();

    if (letter === 'a' || letter === 'e' || letter === 'o' || letter === 'i' || letter === 'u')
      return true;

    return false;
  }

  var renderText = function (text) {
    var time = Math.floor(1500 / text.length);


    var addText = setInterval(() => {
      wish.textContent = text.slice(0, wish.textContent.length + 1);

      if (wish.textContent.length === text.length) {
        clearInterval(addText);

        setTimeout(() => {

          var removeText = setInterval(() => {
            wish.textContent = wish.textContent.slice(0, -1);

            if (!wish.textContent.length) {
              clearInterval(removeText);
            }

          }, time);

        }, 1500);
      }
    }, time);


  };

  var renderWish = function () {
    var word = chooseRandomFromArray(WORDS);

    if (isVowel(word[0]))
      article.textContent = 'an';
    else
      article.textContent = 'a';

    renderText(word);
  };
  /* ******** CODE ******** */
  date.textContent = FROM_NUMBER_TO_DAY[todayDay];

  renderWish();
  setInterval(renderWish, 5000);

})();
