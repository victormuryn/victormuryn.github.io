const dictionary = {
  "1": ["аркушик", "бешкет", "благовіст", "ваги", "вигода (користь)", "випадок", "висіти", "витрата", "відгомін", "відгомін", "відомість (список)", "вірші", "гальма", "дано", "дивлячись", "догма", "донька", "загадка", "закладка (кн.)", "дрова", "закрутка", "запонка", "заставка (загород)", "застібка", "звисока", "здалека", "зозла", "зрання", "зручний", "дещиця", "камбала", "кишка", "колесо", "колія", "копчений (дієприк.)", "косий", "кроїти", "курятина", "лате", "люстро", "маркетинг", "наскрізний", "начинка", "ніздря", "олень", "оцет", "пекарський", "підданий (дієприк.)", "підліковий", "подруга", "позначка", "приморозок", "пригін", "проділ", "разом", "ремінь (пояс)", "решето", "ринковий", "розпірка", "свердло", "сеча", "слина", "статуя", "тигровий", "тулуб", "фольга", "форзац", "хаос (стихія/міфол.)", "царина", "щелепа", "щипці", "решето", "локшина", "зернятко", "спина", "слина"],
  "2": ["близький", "бородавка", "босоніж", "боязнь", "вигода (зручність)", "вишиваний", "вітчим", "гальмо", "видання", "відомість (популярність)", "визвольний", "вимога", "виразний", "глядач", "граблі", "вантажіка", "дочка", "експерт", "завдання", "заміжжя", "застопорити", "зібрання", "індустрія", "зубожіння", "данина", "добуток", "гуртожиток", "дичавіть", "де-юре", "довідник", "ознака", "оптовий", "осетр", "отаман", "павич", "партер", "перекис", "перепад", "перепис", "підданий (імен.)", "пізнання", "пітний", "піцерія", "поміщик", "помовчати", "понятта", "проміжок", "рівнина", "рукопис", "русло", "середина", "стрибати", "тисовий", "тризуб", "усередині", "фартух", "феномен", "цемент", "цінник", "квартал", "кінчити", "копчений (прикм.)", "шофер", "корисний", "хаос (безлад)", "котрий", "крицевий", "мережа", "навчання", "напій", "ненавидіти", "ненависть", "нести", "новий", "обрання", "обруч", "читання", "шовковий", "чорнозем", "чорнослив", "заключний", "подушка", "позаторік", "надлишок", "коромисло", "показник", "заслання"],
  "3": ["агрономія", "безпринципний", "бурштиновий", "бюлетень", "відвезти", "віднести", "відвести", "віршовий", "горошина", "дециметр", "джерело", "діалог", "добовий", "довезти", "єретик", "жалюзі", "залишити", "завезти", "заіржавілий", "заіржавіти", "заробіток", "зобразити", "каталог", "кілометр", "кропива", "кулінарія", "магістерський", "металургія", "листопад", "міліметр", "нанести", "обіцянка", "одинадцять", "переляк", "піала", "завчасу", "порядковий", "посередині", "привезти", "привести", "принести", "псевдонім", "роздрібний", "сантиметр", "соломинка", "стовідсотковий", "текстовий", "течія", "тім'яний", "травестія", "український", "уподобання", "урочистий", "сімдесят", "фаховий", "чотирнадцять", "ярмарковий", "чарівний", "черговий", "завершити", "кульковий", "сум'яття"],
  "4": ["асиметрія", "одноразовий", "перевезти", "перенести", "перевести", "шляхопровід", "щодобовий"],
  "5": ["багаторазовий", "сільськогосподарський"],
  "double": ["алфавіт", "весняний", "завжди", "заставка (у книзі)", "мабуть", "помилка"]
};

const wordElement = document.querySelector(`.word`);
const buttonsWrapper = document.querySelector(`.buttons__wrapper`);
const counterElement = document.querySelector(`.counter`);
const isRightElement = document.querySelector(`.is_right`);

const allWords = Object.values(dictionary).flat();

const selectWord = () => {
  return allWords[Math.floor(Math.random() * allWords.length)];
};

let all = 0;
let right = 0;

const onButtonClick = (answer, word) => {
  all++;

  const emphasis = Object
    .entries(dictionary)
    .find((array) => array[1].includes(word))[0];

  const isRight = emphasis === answer.toString();

  if (isRight) {
    right++;

    isRightElement.textContent = `Правильно!`;

    isRightElement.classList.add(`right`);
    isRightElement.classList.remove(`wrong`);
  } else {
    let vowel = 0;

    const answer = emphasis === `double` ?
      `Подвійний` : 
      word
        .split(``)
        .map((letter) => {
          if ((/^[ауеиіояюєї]$/i).test(letter)) {
            vowel++;
          }

          if (vowel.toString() === emphasis) {
            vowel = Infinity;
            return letter.toUpperCase();
          }

          return letter;
        })
        .join(``);

    isRightElement.textContent = `Помилка. ${answer}!`;

    isRightElement.classList.remove(`right`);
    isRightElement.classList.add(`wrong`);
  }

  counterElement.textContent = `${right} / ${all} (${(right * 100 / all).toFixed(2)}%)`
  render();
};

const renderButton = (value, text, word) => {
  const button = document.createElement(`button`);

  button.addEventListener(`click`, () => onButtonClick(value, word));
  button.textContent = text;
  button.classList.add(`fill`);

  return button;
}

const renderButtons = (count, word) => {
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= count; i++) {
    fragment.appendChild(renderButton(i, i, word));
  };

  fragment.appendChild(renderButton(`double`, `Подвійний`, word));

  buttonsWrapper.innerHTML = ``;
  buttonsWrapper.appendChild(fragment);
}

const render = () => {
  const word = selectWord();
  const bracketIndex = word.indexOf(`(`) === -1 ? Infinity : word.indexOf(`(`);

  wordElement.textContent = word
    .toLowerCase()
    .split(``)
    .map((letter, index) => (/^[ауеиіояюєї]$/i).test(letter) && bracketIndex > index ? letter.toUpperCase() : letter)
    .join(``);

  const emphasises = word
    .split(``)
    .slice(0, bracketIndex)
    .filter((letter) => (/^[ауеиіояюєї]$/i).test(letter))
    .length;

  renderButtons(emphasises, word);
};

render();