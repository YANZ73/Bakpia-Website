// Handle Sign Up and Sign In Form Switching
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Tampilkan username di navbar saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const usernameDisplay = document.querySelector("#username-display"); // Element untuk menampilkan username
  const logoutButton = document.querySelector("#logout-btn"); // Tombol logout
  const loggedInUser = localStorage.getItem("loggedInUser"); // Ambil username dari localStorage

  if (loggedInUser) {
    // Menampilkan username dan tombol logout setelah login
    usernameDisplay.textContent = loggedInUser; // Ganti teks di #username-display dengan username
    logoutButton.style.display = "inline-block"; // Tampilkan tombol logout
    usernameDisplay.href = "javascript:void(0)"; // Nonaktifkan link ke halaman login
  } else {
    // Jika belum login, tampilkan "Login" dan sembunyikan tombol logout
    usernameDisplay.textContent = "Login";
    logoutButton.style.display = "none";
  }

  // Handle Logout Button
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser"); // Hapus data username dari localStorage
    window.location.href = "login.html"; // Redirect ke halaman login
  });
});

// Handle Sign In Form Submission
const signInForm = document.querySelector(".sign-in-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah form submission yang menyebabkan reload halaman

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Cek apakah username dan password valid
  if (username === "kaivanarby@gmail.com" && password === "12345678910fatur") {
    localStorage.setItem("loggedInUser", username); // Simpan username ke localStorage
    window.location.href = "index.html"; // Redirect ke halaman utama setelah login
  } else {
    alert("Invalid username or password.");
  }
});

