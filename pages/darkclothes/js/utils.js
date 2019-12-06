const findGetParameter = parameterName => {
  let result = null,
    tmp = [];

  if (parameterName === null) return result;

  location.search
    .substr(1)
    .split(`&`)
    .forEach(item => {
      tmp = item.split(`=`);
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

class Parallax {
  constructor(element, coefficient = 1) {
    this.element = element;
    this.coefficient = coefficient;

    window.addEventListener(`scroll`, e => {
      e.preventDefault();

      this.element.style.transform = `translateY(-${window.pageYOffset / this.coefficient}%)`;
    });
  };
};

class Modal {
  constructor(modal) {
    this.modal = modal;
  }

  _onBodyClick(e) {
    if (e.target.classList.contains(`modal--open`)) {
      this.closeModal();
    }
  }

  openModal() {
    // додоємо клас вікдриття вікна
    this.modal.classList.add(`modal--open`);
    document.addEventListener(`click`, e => this._onBodyClick(e));
  }

  closeModal() {
    // забираю клас відкриття вікна
    this.modal.classList.remove(`modal--open`);
  }
};

export {findGetParameter, Parallax, Modal};
