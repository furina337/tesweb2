function openModal(card) {
  const imgSrc = card.querySelector("img").src;
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = imgSrc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* Filter */
function filterGallery(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

/* ===============================
   Scroll Animation (AOS-like)
================================ */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach(reveal => {
  observer.observe(reveal);
});
