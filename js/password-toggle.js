const togglePassword = document.querySelector('.togglepassword');
const password = document.querySelector('.idpassword');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

const togglePassword1 = document.querySelector('#togglePassword');
const password1 = document.querySelector('#id_password');

togglePassword1.addEventListener('click', function (e) {
  // toggle the type attribute
  const type1 = password1.getAttribute('type') === 'password' ? 'text' : 'password';
  password1.setAttribute('type', type1);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});