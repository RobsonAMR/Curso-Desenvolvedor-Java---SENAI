
const card = document.getElementById("cardSistema");
const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("botao");
const status = document.getElementById("status");
let ativo = false;
botao.addEventListener("click", function() {
    ativo = !ativo;
    if (ativo) {
        titulo.innerText = "Sistema Ativado";
        mensagem.innerText = "Acesso autorizado! Todos os recursos estão disponíveis.";
        status.innerText = "ONLINE";
        botao.innerText = "Desativar Sistema";
        card.classList.add("bg-success", "bg-opacity-10", "ativado");
        status.classList.replace("bg-secondary", "bg-success");
        botao.classList.replace("btn-primary", "btn-danger");
    } else {
        titulo.innerText = "Sistema Orion";
        mensagem.innerText = "Sistema desativado. Clique no botão para iniciar.";
        status.innerText = "OFFLINE";
        botao.innerText = "Ativar Sistema";
        card.classList.remove("bg-success", "bg-opacity-10", "ativado");
        status.classList.replace("bg-success", "bg-secondary");
        botao.classList.replace("btn-danger", "btn-primary");

    }
});
