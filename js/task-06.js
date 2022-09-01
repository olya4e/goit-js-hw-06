const inputEl = document.querySelector('#validation-input');
console.dir(inputEl);
inputEl.addEventListener('blur', event => {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
