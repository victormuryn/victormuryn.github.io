const fromBtn = document.querySelector(`.form__price-btn--from`);
const toBtn = document.querySelector(`.form__price-btn--to`);
const maxWidth = document.querySelector(`.form__price-line`).offsetWidth;
const filledLine = document.querySelector(`.form__price-filled`);
const fromInput = document.querySelector(`.form__price-input--from`);
const toInput = document.querySelector(`.form__price-input--to`);
const viewType = document.querySelector(`.form__title--type`);
const radioWrapper = document.querySelector(`.form__radio-wrapper`);

const moveFillLine = () => {
  filledLine.style.left = `${fromBtn.offsetLeft}px`;
  filledLine.style.width = `${(maxWidth - fromBtn.offsetLeft) - (maxWidth - toBtn.offsetLeft)}px`;
};

const checkPosition = position => {
  if (position < 0) {
    position = 0;
  } else if (position > maxWidth) {
    position = maxWidth;
  }

  return position;
}

fromBtn.addEventListener(`mousedown`, e => {
  let startX = e.clientX;

  const onMouseMove = event => {
    event.preventDefault();

    const shift = startX - event.clientX;
    startX = event.clientX;
    let position = checkPosition(fromBtn.offsetLeft - shift);

    if (position >= toBtn.offsetLeft) {
      position = toBtn.offsetLeft;
    }

    fromBtn.style.left = `${position}px`;
    moveFillLine();
    fromInput.value = Math.round(position / maxWidth * 5000);
  };

  const onMouseUp = e => {
    e.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

toBtn.addEventListener(`mousedown`, e => {
  let startX = e.clientX;

  const onMouseMove = event => {
    event.preventDefault();

    const shift = startX - event.clientX;
    startX = event.clientX;
    let position = checkPosition(toBtn.offsetLeft - shift);

    if (position <= fromBtn.offsetLeft) {
      position = fromBtn.offsetLeft;
    }

    toBtn.style.left = `${position}px`;
    moveFillLine();
    toInput.value = Math.round(position / maxWidth * 5000);
  };

  const onMouseUp = e => {
    e.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

toInput.addEventListener(`change`, e => {
  e.preventDefault();

  let position = toInput.value / 50;
  position = position * maxWidth / 100
  position = checkPosition(position);

  if (position <= fromBtn.offsetLeft) {
    position = fromBtn.offsetLeft;
    toInput.value = fromInput.value;
  }

  toBtn.style.left = `${position}px`;
  moveFillLine();
});

fromInput.addEventListener(`change`, e => {
  e.preventDefault();

  let position = fromInput.value / 50;
  position = position * maxWidth / 100
  position = checkPosition(position);

  if (position >= toBtn.offsetLeft) {
    position = toBtn.offsetLeft;
    fromInput.value = toInput.value;
  }

  fromBtn.style.left = `${position}px`;
  moveFillLine();
});

viewType.addEventListener(`click`, e => {
  e.preventDefault();
  radioWrapper.classList.toggle(`form__radio-wrapper--open`);
})
