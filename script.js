document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error-msg');

  // Simple login validation (example)
  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    errorMsg.textContent = "";
    // Redirect or load a new page
    // window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
