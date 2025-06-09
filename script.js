document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");
  const envelopeCard = document.querySelector(".envelope-card");

  cardContainer.addEventListener("click", () => {
    envelopeCard.classList.toggle("open");
  });
});

const botoes = document.querySelectorAll(".botoes");
const message = document.querySelector(".message");
const avancarBtn = document.getElementById("avancar");
const voltarBtn = document.getElementById("voltar");

//esse bloco de codigo cria um array das imagens
const imagens = message.querySelectorAll("img");
const arrayImg = [];
imagens.forEach((imagem) => {
  arrayImg.push(imagem);
});
