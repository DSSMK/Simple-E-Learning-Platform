
function register() {
  const user = document.getElementById('regUser').value;
  const pass = document.getElementById('regPass').value;
  localStorage.setItem(user, pass);
  document.getElementById('regSuccess').innerText = 'Registration successful!';
}

function login() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  if(localStorage.getItem(user) === pass) {
    document.getElementById('loginError').innerText = 'Login successful!';
  } else {
    document.getElementById('loginError').innerText = 'Invalid credentials!';
  }
}
