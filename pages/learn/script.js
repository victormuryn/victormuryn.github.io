// let dictionary = {
//   "захоплюватися": "admire",
//   "радити": "advise",
//   "відповідний": "appropriate",
//   "підпал": "arson",
//   "підпалювач": "arsonist",
//   "лавка": "bench",
//   "влаштовуватися": "break into",
//   "грабіжник (будівлі)": "burglar",
//   "пограбування (будівлі)": "burglary",
//   "грабувати (будівлі)": "burgle",
//   "полотно": "canvas",
//   "банкомат": "cash machine",
//   "жувати": "chew",
//   "обставина": "circumstance",
//   "здійснити": "commit",
//   "зізнаватися": "confess",
//   "збентежений": "confused",
//   "контактувати": "contact",
//   "містити": "contain",
//   "злочинець": "criminal",
//   "жорстокий": "cruel",
//   "кредитна картка": "debit card",
//   "навмисно": "deliberately",
//   "описувати": "describe",
//   "спрямовувати": "direct",
//   "торгівля накркотиками": "drug dealing",
//   "втікати": "escape",
//   "суттєвий": "essential",
//   "доказ": "evidence",
//   "підробка": "fake",
//   "боєць, борець": "fighter",
//   "заповнювати": "fill in",
//   "шахрайство": "fraud",
//   "позбутися": "get rid of",
//   "героїчний": "heroic",
//   "індентичність": "identity",
//   "несправедливість": "injustice",
//   "невинний": "innocent",
//   "розслідування": "investigate",
//   "в'язниця": "jail",
//   "викрадення авто": "joyriding",
//   "шкідливий": "junk",
//   "грабувати (вуличний)": "mug",
//   "грабіжник (вуличний)": "mugger",
//   "вбивство": "murder",
//   "вбивця": "murderer",
//   "nick": "nick",
//   "позазаконом": "outlaw",
//   "поліцейський інспектор": "police inspector",
//   "поліцейський": "police officer",
//   "в'язниця (2)": "prison",
//   "коляска": "pushchair",
//   "грабувати (банк)": "rob",
//   "пограбування (банку)": "robbery",
//   "керувати": "rule",
//   "охоронець": "security guard",
//   "піпалити": "set fire to",
//   "пограбування магазину": "shoplifting",
//   "розгромити": "smash",
//   "боротися": "strugle",
//   "підозрюваний": "suspect",
//   "підозрювати": "suspect",
//   "крадіжка": "theft",
//   "злодій": "thief",
//   "подорожувати": "travel",
//   "навряд чи": "unlikely",
//   "цінний": "valuable",
//   "вандалізм": "vandalism",
//   "свідок, свідчити": "witness",
//   "кричати": "yell",
//   "хуліган": "yob",
//   "декоратор": "decorator",
//   "жертвувати": "donate",
//   "у небезпеці": "endangered",
//   "справжній": "genuine",
//   "петиція": "petition",
//   "загроза": "threat",
//   "випробовування/суд": "trial",
//   "кит": "whale"
// };

let dictionary = {
  "продовжувати": "carry on",
  "їсти в ресторані": "eat out",
  "покинути звичку, перестати": "give up",
  "брати участь": "join in",
  "видалити гравця": "send off",
  "розпочати нове хобі": "take up",
  "зменшити (звук)": "turn down",
  "збільшити (звук)": "turn up",
  "перекреслити": "cross out",
  "шукати інформації": "look up",
  "вказати важливу інформацію": "point out",
  "чиатати вголос": "read out",
  "порвати": "rip up",
  "витерти": "rub out",
  "перегорнути": "turn over",
  "записати": "write down",
  "сідати в машину": "get in",
  "виходити з автобуса (поїзда)": "get off",
  "сідати в автобус (поїзд)": "get on",
  "виходити з машини": "get out",
  "іти гети": "go away",
  "повертатися": "go back",
  "вирушати у подорож": "set off",
  "взлітати": "take off",
  "виховувати": "bring up",
  "посваритися": "fall out",
  "добре ладити": "get on",
  "зустрічатися": "go out with",
  "рости": "grow up",
  "розчарувати": "let down",
  "доглядати": "look after",
  "розійтися": "split up",
  "додавати": "add up",
  "повертатися(1)": "come back",
  "поспішити": "hurry up",
  "повертати гроші": "pay back",
  "заощаджувати": "save up",
  "поставити на місце": "take back",
  "зняти": "take down",
  "зламатися": "brake down",
  "випадково натрапити": "come across",
  "дізнатися": "find out",
  "вигадати": "make up",
  "зламати тягнучи": "pull of",
  "викинути": "throw away",
  "вимкнути": "turn off",
  "ввіькнути": "turn on"
};

let randomKey = function (obj) {
  var keys = Object.keys(obj);
  return keys[keys.length * Math.random() << 0];
};

let onBtn = (e) => {
  e.preventDefault();

  let enValue = en.value.toLowerCase();
  let dictValue = dictionary[ukr.textContent];

  console.log(enValue, dictValue);
  
  if (enValue === dictValue) {
    correct.classList.remove(`incorrect`);
    correct.querySelector(`.correct-text`).textContent = `Correct`;
    correct.querySelector(`.correct-name`).textContent = ``;
    delete dictionary[ukr.textContent];

    ukr.textContent = randomKey(dictionary);
  } else {
    correct.classList.add(`incorrect`);
    correct.querySelector(`.correct-text`).textContent = `Incorrect`;
    correct.querySelector(`.correct-name`).textContent = dictValue;
    mistakes.textContent = +mistakes.textContent + 1;
  }

  left.textContent = Object.keys(dictionary).length;
  en.focus();
  en.value = ``;
}

let ukr = document.querySelector(`.word-ukraininan`);
let en = document.querySelector(`.word-english`);
let check = document.querySelector(`.check`);
let correct = document.querySelector(`.correct`);
let left = document.querySelector(`.left`);
let mistakes = document.querySelector(`.mistakes`);

ukr.textContent = randomKey(dictionary);

check.addEventListener(`click`, onBtn);
document.addEventListener(`keydown`, (e) => {
  if (e.keyCode === 13) {
    onBtn(e);
  }
})