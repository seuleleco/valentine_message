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
 console.log(arrayImg);
  let i = 0;

   
  function avancar() {
    if (i < arrayImg.length - 1) {
      i++;
      arrayImg[i].style.display = "none";
      arrayImg[i - 1].style.display = "block";
    }
  }
  function voltar() {
    if (i > 0) {
      i--;
      arrayImg[i].style.display = "none";
      arrayImg[i + 1].style.display = "block";
    }
  }

  avancarBtn.addEventListener("click", avancar);
  voltarBtn.addEventListener("click", voltar);
  console.log(arrayImg);
});
