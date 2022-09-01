let counterValue = 0;
const decrementBtnEl = document.querySelector('button[data-action=decrement]');
const incrementBtnEl = document.querySelector('button[data-action=increment]');
const counterEL = document.querySelector('#value');

const onDecrementBtnClick = () => {
  counterValue -= 1;
  counterEL.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  counterEL.textContent = counterValue;
};

decrementBtnEl.addEventListener('click', onDecrementBtnClick);
incrementBtnEl.addEventListener('click', onIncrementBtnClick);
