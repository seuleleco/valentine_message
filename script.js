document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.querySelector(".card-container");
  const envelopeCard = document.querySelector(".envelope-card");

  cardContainer.addEventListener("click", () => {
    envelopeCard.classList.toggle("open");
  });

  const botoes = document.querySelectorAll(".botoes");
  const messageDiv = document.querySelector(".message");
  const avancarBtn = document.getElementById("avancar");
  const voltarBtn = document.getElementById("voltar");

  

  //esse bloco de codigo cria um array das imagens
  const imagens = messageDiv.querySelectorAll("img");
  const arrayImg = [];
  imagens.forEach((imagem) => {
    arrayImg.push(imagem);
  });

  let i = 0;

  arrayImg.forEach((item, index) => {
    if (index === 0) {
      item.style.display = "block"; 
    } else {
      item.style.display = "none"; 
    }
  }
) 
   
  function avancar() {
    if (i < arrayImg.length - 1) {
      arrayImg[i].style.display = "none";
      i++;
      arrayImg[i].style.display = "block";
      
    }
  }
  function voltar() {
    if (i > 0) {
      arrayImg[i].style.display = "none";
      i--;
      arrayImg[i].style.display = "block";
    }
  }
  

  avancarBtn.addEventListener("click", avancar);
  voltarBtn.addEventListener("click", voltar);
  
});
