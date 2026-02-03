AOS.init({
  duration: 1000,
  once: true,
});

// Toggle Prakata
function togglePrakata() {
  const text = document.getElementById("prakataText");
  const btn = document.querySelector(".btn-read");

  text.classList.toggle("show");

  btn.textContent = text.classList.contains("show") ? "Tutup" : "Selengkapnya";
}
// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const toggleBtn = document.querySelector(".dark-toggle");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";

  // Simpan preferensi
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// Load Dark Mode dari localStorage
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    document.querySelector(".dark-toggle").textContent = "☀️";
  }
});
