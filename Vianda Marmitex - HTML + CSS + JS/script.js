

const sacola = [];
const TAXA_ENTREGA = 5;
let tipo = "entrega";

function dinheiro(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}
function adicionar(nome, preco) {
  const itemExistente = sacola.find(function (item) {
    return item.nome === nome;
  });

  if (itemExistente) {
    itemExistente.qtd = itemExistente.qtd + 1;
  } else {
    sacola.push({ nome: nome, preco: preco, qtd: 1 })
  }
  mostrarSacola();
}

function mostrarSacola() {
  const lista = document.querySelector("#itens");
  let total = 0;

  if (sacola.length === 0) {
    lista.innerHTML = '<p class="vazio"> Sua sacola está vazia. <br> Toque no + para adicionar.</p>';
  } else {
    let html = "";

    sacola.forEach(function (item, indice) {
      const subtotal = item.preco * item.qtd;
      total = total + subtotal;
      html += `<div class = "item">
                  <div>
                      <b>${item.nome}</b>
                      <small>${dinheiro(subtotal)}</small>
                 </div>
                <div class="qtd">
                      <button onclick="mudar(${indice}, - 1)">-</button>
                      <span>${item.qtd}</span>
                      <button onclick="mudar(${indice}, 1)">+</button>
                </div>
              </div>`;

    });
    lista.innerHTML = html;
  }
  let taxa = 0;
  if(tipo === "entrega" && sacola.length >0){
    taxa = TAXA_ENTREGA;
  }
  document.querySelector("#taxa").textContent = dinheiro(taxa);
  document.querySelector("#total").textContent = dinheiro(total + taxa);
}

function mudar(indice, quanto) {
  sacola[indice].qtd = sacola[indice].qtd + quanto;

  if (sacola[indice].qtd <= 0) {
    sacola.splice(indice, 1);
  }
  mostrarSacola();
}
//Botões

const botoes = document.querySelectorAll(".add");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function (evento) {
    evento.preventDefault();

    const card = botao.closest(".prod");
        // Prato que não tem hoje: não faz nada
    if (card.classList.contains("indisponivel")) {
        return;
    }
    const nome = card.querySelector("h4").textContent.trim();
    const precoTexto = card.querySelector(".preco").textContent;
    const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

    adicionar(nome, preco);
  });
})

const botoesTipo = document.querySelectorAll(".tipo button");

botoesTipo.forEach(function(botao){
  botao.addEventListener("click",function(){
    botoesTipo.forEach(function (b) {
      b.classList.remove("on");
    });
    botao.classList.add("on");
    tipo = botao.dataset.tipo;
       
    if (tipo === "entrega") {
        document.querySelector("#endereco").style.display = "";
    } else {
        document.querySelector("#endereco").style.display = "none";
    }
    // Mostra o endereço da loja só na retirada
    if (tipo === "retirada") {
        document.querySelector("#infoRetirada").style.display = "block";
    } else {
        document.querySelector("#infoRetirada").style.display = "none";
    }

    mostrarSacola();
  });
})

// ===== Enviar pedido pelo WhatsApp =====
const WHATSAPP = "556132538736";
const formPedido = document.querySelector("#formPedido");

formPedido.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Não deixa enviar com a sacola vazia
    if (sacola.length === 0) {
        alert("Sua sacola está vazia. Escolha pelo menos um prato.");
        return;
    }

    // Lê o que o cliente preencheu
    const nome = document.querySelector("#nome").value.trim();
    const endereco = document.querySelector("#endereco").value.trim();
    const pagamento = document.querySelector("#pagamento").value;
    const obs = document.querySelector("#obs").value.trim();

    // O nome não pode ser só espaços
    if (nome === "") {
        alert("Informe o seu nome.");
        return;
    }

    // Na entrega, o endereço é obrigatório
    if (tipo === "entrega" && endereco === "") {
        alert("Informe o endereço para a entrega.");
        return;
    }

    // Monta a mensagem
    let msg = "*Pedido - Vianda Marmitex*\n\n";
    let subtotal = 0;

    sacola.forEach(function (item) {
        const valor = item.preco * item.qtd;
        subtotal = subtotal + valor;
        msg += item.qtd + "x " + item.nome + " - " + dinheiro(valor) + "\n";
    });

    let taxa = 0;
    if (tipo === "entrega") {
        taxa = TAXA_ENTREGA;
    }

    msg += "\nSubtotal: " + dinheiro(subtotal);
    if (taxa > 0) {
        msg += "\nTaxa de entrega: " + dinheiro(taxa);
    }
    msg += "\n*Total: " + dinheiro(subtotal + taxa) + "*\n\n";

    msg += "Nome: " + nome + "\n";
    if (tipo === "entrega") {
        msg += "Entregar em: " + endereco + "\n";
    } else {
        msg += "Vou retirar no local\n";
    }
    msg += "Pagamento: " + pagamento;

    if (obs !== "") {
        msg += "\nObs.: " + obs;
    }

    // Abre o WhatsApp com a mensagem pronta
    const link = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
    window.open(link, "_blank");
});

// ===== Busca no cardápio =====

// Tira acentos e deixa tudo minúsculo: "Água" vira "agua"
function simplificar(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const busca = document.querySelector("#busca");

busca.addEventListener("input", function () {
    const termo = simplificar(busca.value);
    let encontrados = 0;

    // Mostra ou esconde cada card
    document.querySelectorAll(".prod").forEach(function (card) {
        const nome = simplificar(card.querySelector("h4").textContent);

        if (nome.includes(termo)) {
            card.style.display = "";
            encontrados++;
        } else {
            card.style.display = "none";
        }
    });

    // Esconde a seção inteira se nenhum card dela apareceu
    document.querySelectorAll(".secao").forEach(function (secao) {
        let visiveis = 0;

        secao.querySelectorAll(".prod").forEach(function (card) {
            if (card.style.display !== "none") {
                visiveis++;
            }
        });

        if (visiveis > 0) {
            secao.style.display = "";
        } else {
            secao.style.display = "none";
        }
    });

    // Mensagem quando não acha nada
    if (encontrados === 0) {
        document.querySelector("#semResultado").style.display = "block";
    } else {
        document.querySelector("#semResultado").style.display = "none";
    }
});

// ===== Cardápio do dia =====
// 0 = domingo, 1 = segunda, 2 = terça ... 5 = sexta, 6 = sábado
const hoje = new Date().getDay();

document.querySelectorAll(".prod[data-dias]").forEach(function (card) {
    // "0,1,3" vira a lista [0, 1, 3]
    const dias = card.dataset.dias.split(",").map(Number);

    if (!dias.includes(hoje)) {
        card.classList.add("indisponivel");
    }
});