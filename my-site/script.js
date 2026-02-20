const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const dialog = document.getElementById("lightbox");
const imgEl = document.getElementById("lightboxImg");
const closeBtn = dialog.querySelector(".close");

document.querySelectorAll(".card").forEach(btn => {
  btn.addEventListener("click", () => {
    imgEl.src = btn.dataset.full;
    dialog.showModal();
  });
});

closeBtn.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});