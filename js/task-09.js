function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const onClickBtnChangeColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = `${getRandomHexColor()}`;
};
buttonChangeColorEl.addEventListener('click', onClickBtnChangeColor);
