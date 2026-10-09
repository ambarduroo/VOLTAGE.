const modal = document.getElementById("playerModal");
const closeButton = document.getElementById("closePlayer");

function openPlayer() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlayer() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".listen-button").forEach((button) => {
  button.addEventListener("click", openPlayer);
});

closeButton.addEventListener("click", closePlayer);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closePlayer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closePlayer();
  }
});

