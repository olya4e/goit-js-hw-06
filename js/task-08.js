const formEl = document.querySelector('.login-form');
const buttonEl = document.querySelector('button');
formEl.addEventListener('submit', event => {
  const {
    elements: { email, password },
  } = event.target;
  event.preventDefault();
  if (email.value.length === 0 || password.value.length === 0) {
    alert('Всі поля форми повинні бути заповнені');
    return;
  }
  const userIfo = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(userIfo);
  event.currentTarget.reset();
});
