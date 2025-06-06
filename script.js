document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");
  const envelopeCard = document.querySelector(".envelope-card");

  cardContainer.addEventListener("click", () => {
    envelopeCard.classList.toggle("open");
  });
});
