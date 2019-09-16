let dictionary = {
  "захоплюватися": "admire",
  "радити": "advise",
  "відповідний": "appropriate",
  "підпал": "arson",
  "підпалювач": "arsonist",
  "лавка": "bench",
  "влаштовуватися": "break into",
  "грабіжник (будівлі)": "burglar",
  "пограбування (будівлі)": "burglary",
  "грабувати (будівлі)": "burgle",
  "полотно": "canvas",
  "банкомат": "cash machine",
  "жувати": "chew",
  "обставина": "circumstance",
  "здійснити": "commit",
  "зізнаватися": "confess",
  "збентежений": "confused",
  "контактувати": "contact",
  "містити": "contain",
  "злочинець": "criminal",
  "жорстокий": "cruel",
  "кредитна картка": "debit card",
  "навмисно": "deliberately",
  "описувати": "describe",
  "спрямовувати": "direct",
  "торгівля накркотиками": "drug dealing",
  "втікати": "escape",
  "суттєвий": "essential",
  "доказ": "evidence",
  "підробка": "fake",
  "боєць, борець": "fighter",
  "заповнювати": "fill in",
  "шахрайство": "fraud",
  "позбутися": "get rid of",
  "героїчний": "heroic",
  "індентичність": "identity",
  "несправедливість": "injustice",
  "невинний": "innocent",
  "розслідування": "investigate",
  "в'язниця": "jail",
  "викрадення авто": "joyriding",
  "шкідливий": "junk",
  "грабувати (вуличний)": "mug",
  "грабіжник (вуличний)": "mugger",
  "вбивство": "murder",
  "вбивця": "murderer",
  "nick": "nick",
  "позазаконом": "outlaw",
  "поліцейський інспектор": "police inspector",
  "поліцейський": "police officer",
  "в'язниця (2)": "prison",
  "коляска": "pushchair",
  "грабувати (банк)": "rob",
  "пограбування (банку)": "robbery",
  "керувати": "rule",
  "охоронець": "security guard",
  "піпалити": "set fire to",
  "пограбування магазину": "shoplifting",
  "розгромити": "smash",
  "боротися": "strugle",
  "підозрюваний": "suspect",
  "підозрювати": "suspect",
  "крадіжка": "theft",
  "злодій": "thief",
  "подорожувати": "travel",
  "навряд чи": "unlikely",
  "цінний": "valuable",
  "вандалізм": "vandalism",
  "свідок, свідчити": "witness",
  "кричати": "yell",
  "хуліган": "yob",
  "декоратор": "decorator",
  "жертвувати": "donate",
  "у небезпеці": "endangered",
  "справжній": "genuine",
  "петиція": "petition",
  "загроза": "threat",
  "випробовування/суд": "trial",
  "кит": "whale"
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