const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

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
