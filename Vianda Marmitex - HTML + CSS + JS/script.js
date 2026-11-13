console.log("Java Scripit da Vianda Funcionando!");

const sacola = [];

const botoes = document.querySelectorAll(".add");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function (evento){
    evento.preventDefault();
    
    const card = botao.closest (".prod");

    const nome = card.querySelector("h4").textContent;
    const precoTexto = card.querySelector(".preco").textContent;

    const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

    sacola .push({ nome: nome, preco: preco });
    console.log("Adicionou", nome, preco);
    console.log("Sacola agora", sacola);
  });

});