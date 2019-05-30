'use strict';

// constants
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон', 'Гарри', 'Альбус', 'Гермиона', 'Роксолана'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг', 'Дамблдор', 'Поттер', 'Грейнджер'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;

// variables
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // template
var setupSimilarList = document.querySelector('.setup-similar-list'); // modal > list of wizards

var setup = document.querySelector('.setup'); // modal window
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');
var setupInput = document.querySelector('.setup-user-name');

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

// functions
var chooseRandomItemFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizard = function () {
  var wizard = {
    name: chooseRandomItemFromArray(NAMES) + ' ' + chooseRandomItemFromArray(SURNAMES),
    coatColor: chooseRandomItemFromArray(COAT_COLOR),
    eyesColor: chooseRandomItemFromArray(EYES_COLOR)
  };

  return wizard;
};

var renderWizard = function (wizard) {
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var onClickOpenSetup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onKeydownWindow);
};

var onClickCloseSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onKeydownWindow);
};

var onKeydownWindow = function (evt) {
  if (evt.keyCode === 27) {
    onClickCloseSetup();
  }
};

var onKeyDownSetup = function (evt) {
  if (evt.keyCode === 13) {
    onClickOpenSetup();
  }
};

var onKeyDownCloseSetup = function (evt) {
  if (evt.keyCode === 13) {
    onClickCloseSetup();
  }
};
// code
var wizards = []; // list of all wizards
for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizards.push(createWizard()); // create all wizards
}

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

setupOpen.addEventListener('click', onClickOpenSetup);
setupOpenIcon.addEventListener('keydown', onKeyDownSetup);

setupClose.addEventListener('click', onClickCloseSetup);
setupClose.addEventListener('keydown', onKeyDownCloseSetup);

setupInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onKeydownWindow);
});

setupInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onKeydownWindow);
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = chooseRandomItemFromArray(COAT_COLOR);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = chooseRandomItemFromArray(EYES_COLOR);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = chooseRandomItemFromArray(FIREBALL_COLOR);
});
