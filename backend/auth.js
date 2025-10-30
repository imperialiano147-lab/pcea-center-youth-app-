// Simple local authentication system using localStorage

function saveUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find(u => u.email === email);
  if (exists) {
    alert("User already exists!");
    return;
  }
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
  window.location.href = "login.html";
}

function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = users.find(u => u.email === email && u.password === password);
  if (validUser) {
    alert("Login successful!");
    localStorage.setItem("loggedInUser", email);
    window.location.href = "../index.html";
  } else {
    alert("Invalid credentials!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const regBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");

  if (regBtn) {
    regBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      if (email && password) saveUser(email, password);
      else alert("Please fill all fields!");
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      if (email && password) loginUser(email, password);
      else alert("Please fill all fields!");
    });
  }
});
