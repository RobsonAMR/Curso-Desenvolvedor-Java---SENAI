# 🍱 Vianda Marmitex

**Tecnologias:** HTML5, CSS3 e JavaScript

Cardápio online da **Vianda Marmitex**, restaurante de comida caseira em Vicente Pires (DF). O cliente escolhe as marmitas e as bebidas, monta o pedido em uma sacola e envia tudo pronto pelo **WhatsApp**. O layout escuro foi inspirado em aplicativos de delivery.

> Projeto do curso Desenvolvedor Java (turma vespertina) no SENAI Taguatinga.

---

## ✨ Funcionalidades

### 🛒 Sacola de pedido

- O botão **"+"** de cada produto adiciona o item à sacola.
- Quando o item já está na sacola, o botão aumenta a quantidade em vez de duplicar o item.
- Os botões **"+"** e **"−"** da sacola alteram a quantidade. Se a quantidade chegar a zero, o item sai da sacola.
- O subtotal de cada item, a taxa de entrega e o total são recalculados automaticamente.

### 🛵 Entrega ou retirada

- **Entrega:** soma a taxa única de **R$ 5,00** e exige o endereço.
- **Retirada:** zera a taxa, esconde o campo de endereço e mostra o endereço da loja com um link para o Google Maps.

### 📲 Envio pelo WhatsApp

O formulário pede nome, endereço, forma de pagamento (Pix, cartão ou dinheiro) e observações. Ao enviar, o JavaScript monta a mensagem a seguir e abre o WhatsApp do restaurante com ela pronta:

```
*Pedido - Vianda Marmitex*

2x Bisteca Suína - R$ 48,00
1x Coca-Cola Lata - R$ 6,00

Subtotal: R$ 54,00
Taxa de entrega: R$ 5,00
*Total: R$ 59,00*

Nome: Robson
Entregar em: Rua 8
Pagamento: Pix
```

O pedido não é enviado se a sacola estiver vazia ou se faltar o endereço na entrega.

### 🔍 Busca no cardápio

- O campo de busca filtra os produtos enquanto o cliente digita.
- A busca ignora acentos e diferença entre maiúsculas e minúsculas: "agua" encontra "Água".
- Seções sem nenhum resultado são escondidas, e aparece a mensagem "Nenhum item encontrado" quando nada corresponde à busca.

### 📅 Cardápio do dia

Cada prato pode ter os dias em que está disponível, definidos no atributo `data-dias`, em que 0 é domingo e 6 é sábado. O site verifica o dia de hoje e, para os pratos que não são servidos nesse dia:

- deixa o card esmaecido;
- mostra o aviso **"Indisponível hoje"**;
- bloqueia o botão "+".

Exemplos: a **Feijoada** só fica disponível às sextas, e o **Frango Grelhado** não é servido às terças.

### 📱 Layout responsivo

- **Computador:** duas colunas com CSS Grid, o cardápio à esquerda e a sacola fixa à direita (`position: sticky`).
- **Até 980 px:** uma coluna só, com a sacola embaixo do cardápio.
- **Até 600 px:** ajustes de espaçamento, logo e fotos para celular.

---

## 🍽️ Cardápio

**Marmitas:** acompanham feijão carioca, arroz, macarrão, farofa e vinagrete, com 120 g de proteína.

| Prato | Preço | Disponibilidade |
|---|---:|---|
| Frango Grelhado | R$ 22,00 | Todos os dias, exceto terça |
| Linguiça de Frango | R$ 20,00 | Todos os dias |
| Bisteca Suína | R$ 24,00 | Todos os dias |
| Parmegiana de Frango | R$ 24,00 | Todos os dias (acompanha arroz e batata frita) |
| Strogonoff de Frango | R$ 24,00 | Todos os dias |
| Coxa e Sobrecoxa | R$ 24,00 | Todos os dias |
| Bife Grelhado | R$ 24,00 | Todos os dias |
| Bife à Cavalo | R$ 26,00 | Todos os dias |
| Feijoada | R$ 24,00 | Só às sextas |

**Bebidas:**

| Bebida | Preço |
|---|---:|
| Coca-Cola Lata (310 ml) | R$ 6,00 |
| Suco Lata Del Valle (310 ml) | R$ 8,00 |
| Água sem gás (500 ml) | R$ 6,00 |
| Água com gás (500 ml) | R$ 6,00 |
| Coca-Cola 600 ml / Coca-Cola Zero 600 ml | R$ 10,00 |
| Guaraná Mineiro 2 L | R$ 12,00 |
| Coca-Cola 2 L / Coca-Cola Zero 2 L | R$ 14,00 |

O arquivo `cardapio_planilha.tsv` guarda esses mesmos dados em formato de planilha (categoria, nome, descrição, preço, foto, etiqueta, dias e disponibilidade).

---

## 🧩 Conceitos de JavaScript praticados

| Conceito | Onde foi usado |
|---|---|
| `querySelector` / `querySelectorAll` | Selecionar botões, cards e campos do formulário |
| `addEventListener` (`click`, `submit`, `input`) | Botões "+", entrega/retirada, envio do pedido e busca |
| `preventDefault()` | Impedir que links e o formulário recarreguem ou saiam da página |
| Arrays e objetos | Sacola: `{ nome, preco, qtd }` |
| `find`, `forEach`, `splice`, `map`, `includes` | Procurar, percorrer, remover e filtrar itens |
| Funções | `adicionar`, `mostrarSacola`, `mudar`, `dinheiro`, `simplificar` |
| Template strings e `innerHTML` | Montar a lista da sacola na tela |
| `classList` e `dataset` | Botão ativo, `data-tipo` e `data-dias` |
| `Date().getDay()` | Descobrir o dia da semana para o cardápio do dia |
| `normalize("NFD")` + regex | Remover acentos na busca |
| `encodeURIComponent` + `window.open` | Gerar o link do WhatsApp com a mensagem |
| Constantes (`const`) | `TAXA_ENTREGA` e número do `WHATSAPP` em um só lugar |

---

## 📁 Arquivos

```
Vianda Marmitex - HTML + CSS + JS/
├── index.html             # Estrutura da página e cards do cardápio
├── style.css              # Tema escuro, Grid, Flexbox e responsividade
├── script.js              # Sacola, entrega/retirada, busca, cardápio do dia e WhatsApp
├── cardapio_planilha.tsv  # Dados do cardápio em formato de planilha
├── favicon.jpg            # Ícone da aba
├── logo_horizontal.jpg    # Logo do cabeçalho
└── *.jpg / *.jpeg         # Fotos dos pratos e das bebidas
```

---

## ▶️ Como executar

1. Abra o arquivo `index.html` em um navegador, mantendo `style.css`, `script.js` e as imagens na mesma pasta.
2. Outra opção é usar a extensão **Live Server** do Visual Studio Code.

---

## ⚠️ Observações

- O site **não processa pagamentos** e **não armazena pedidos**. O pedido só é concluído quando o cliente envia a mensagem no WhatsApp e o restaurante confirma.
- A sacola fica apenas na memória da página: se a página for recarregada, ela volta a ficar vazia.
- O cardápio é escrito diretamente no HTML. A planilha `.tsv` não é lida pelo site.
- O "Indisponível hoje" usa a data do aparelho do cliente.

---

## 🚀 Melhorias futuras

- [ ] Gerar os cards automaticamente a partir da planilha do cardápio
- [ ] Guardar a sacola no `localStorage` para não perder o pedido ao recarregar a página
- [ ] Avisar quando o pedido for feito fora do horário de funcionamento
- [ ] Adicionar Vale-Refeição às formas de pagamento

---

## 📞 Contato

Pedidos pelo WhatsApp: [(61) 3253-8736](https://wa.me/556132538736)
