'use strict';

(function () {
  /* ******** CONSTS ******** */
  const FROM_NUMBER_TO_DAY = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const WORDS = ['ace', 'amazing', 'astonishing', 'astounding', 'awe-inspiring', 'awesome', 'badass',
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
  const date = document.querySelector('.good-luck__day');
  const wish = document.querySelector('.good-luck__wish');
  const article = document.querySelector('.good-luck__article');

  // Other variables
  const todayDay = new Date().getDay();

  /* ******** EXPORT ******** */

  /* ******** FUNCTIONS ******** */
  // addEventListener functions

  // Other functions
  const chooseRandomFromArray = (array) => array[ Math.floor( Math.random() * array.length ) ];

  const isVowel = (letter) => {
    letter = letter.toLowerCase();

    if (letter === 'a' || letter === 'e' || letter === 'o' || letter === 'i' || letter === 'u')
      return true;

    return false;
  }

  const renderText = (text) => {
    const time = Math.floor(1500 / text.length);

    const addText = setInterval(() => {
      wish.textContent = text.slice(0, wish.textContent.length + 1);

      if (wish.textContent.length === text.length) {
        clearInterval(addText);

        setTimeout(() => {

          const removeText = setInterval(() => {
            wish.textContent = wish.textContent.slice(0, -1);

            if (!wish.textContent.length) {
              clearInterval(removeText);
            }

          }, time);

        }, 1500);
      }
    }, time);


  };

  var renderWish = () => {
    const word = chooseRandomFromArray(WORDS);

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
