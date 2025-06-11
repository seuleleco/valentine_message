const name = document.getElementById("name");
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    const nameValue = name.value.trim();
    if (nameValue == "hemely" || nameValue == "Hemely" || nameValue == "HEMELY") {
    

function confirmar() {}
const confirmacao = confirm("VOCÊ TEM CERTEZA DE QUE É A NAMORADA DE LEONARDO? SE SIM, CLIQUE EM OK. SE NÃO, CLIQUE EM CANCELAR.");
if (confirmacao) {
  
  window.location.href = "index-message.html";
}else{
        alert("Você disse que não é a namorada do Leonardo!");
        window.location.href = "/valentine_message/index-error.html";
}


    }else{
        alert("Você não é a namorada do Leonardo!");
        window.location.href = "index-error.html";
    }
    return;
});