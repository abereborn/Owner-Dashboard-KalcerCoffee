const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const loginForm = document.getElementById("loginForm");

// toggle UI
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// LOGIN SUBMIT
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // STOP reload

  // simulasi login berhasil
  window.location.href = "Dashboard/dashboard.html";
});
