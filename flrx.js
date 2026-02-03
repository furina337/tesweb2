const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleSidebar() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Tutorial Windows 7 siap digunakan");

  // contoh fitur tambahan
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Navigasi ke:", link.getAttribute("href"));
    });
  });
});