const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');
const form = document.getElementById('loginForm');

// Check if credentials exist in localStorage
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');

if (savedUsername && savedPassword) {
  existingBtn.style.display = 'block';
}

// Handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  alert(`Logged in as ${username}`);

  if (rememberCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  // Update visibility of existing user button
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingBtn.style.display = 'block';
  } else {
    existingBtn.style.display = 'none';
  }

  form.reset();
});

// Handle "Login as existing user" button
existingBtn.addEventListener('click', function () {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
