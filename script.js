document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");
  const envelopeCard = document.querySelector(".envelope-card");

  cardContainer.addEventListener("click", () => {
    envelopeCard.classList.toggle("open");
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

  let i = 0;

  function avancar() {
    if ((i = 0 < arrayImg.length - 1)) {
      i++;
      arrayImg[i].style.display = "block";
      arrayImg[i - 1].style.display = "none";
    }
  }
  function voltar() {
    if ((i = 0 < arrayImg.length - 1)) {
      i--;
      arrayImg[i].style.display = "block";
      arrayImg[i + 1].style.display = "none";
    }
  }

  avancarBtn.addEventListener("click", avancar);
  voltarBtn.addEventListener("click", voltar);
});
