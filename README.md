# 💻 Portfólio de Projetos

## Sobre

Este repositório reúne projetos acadêmicos e práticos que aplicam conceitos de lógica de programação e desenvolvimento web. Cada projeto tem uma proposta própria e usa as tecnologias adequadas ao seu objetivo.

Esta documentação apresenta uma visão geral dos trabalhos, suas principais funcionalidades e as tecnologias utilizadas.

---

## 📚 Projetos

### 1. Controle de Estoque

**Linguagem:** Portugol

Programa de terminal para controlar o estoque de produtos de informática. Foi desenvolvido para praticar lógica de programação, estruturas de repetição, estruturas condicionais e operações matemáticas.

**Principais funcionalidades:**

- Menu que se repete até o usuário escolher sair.
- Consulta da quantidade disponível de cada produto: teclado, mouse, monitor, notebook, pendrive e computador.
- Retirada de produtos pelo código, com baixa automática no estoque.
- Cálculo e exibição do valor total da retirada (quantidade × preço unitário).
- Validação de códigos inválidos e de quantidades maiores que o estoque disponível.

**Observação:** as quantidades e os preços são definidos no próprio código. As alterações valem só enquanto o programa está em execução, porque os dados não são salvos em arquivo nem em banco de dados.

---

### 2. Call of Duty: site de notícias

**Tecnologias:** HTML5 e CSS3

Site estático com notícias e informações sobre a série de jogos Call of Duty.

O projeto foi desenvolvido em duas versões:

- **Versão HTML:** layout montado com tabelas. A aparência é definida por atributos do próprio HTML (`bgcolor`, `background`, `align`, `<font>`), sem arquivo CSS. Esses recursos são obsoletos no HTML5 e foram usados de propósito, para praticar o HTML puro.
- **Versão HTML + CSS:** estrutura com tags semânticas (`header`, `main`, `section`, `footer`) e aparência concentrada em uma folha de estilos externa (`style.css`), com variáveis CSS, Flexbox e responsividade.

**Conteúdo apresentado:**

- Topo com imagem de fundo e mensagem de boas-vindas.
- Últimas notícias ao lado da capa do jogo.
- Área de gameplay com miniatura e link para vídeo no YouTube.
- Top 3 campeões e principais campeonatos.
- Linha do tempo da série, com jogo, ano e estúdio (versão HTML).
- Tabela das melhores armas, com categoria, desempenho e nível de desbloqueio.

**Observação:** as informações estão escritas diretamente na página. O site não tem integração com API nem atualização automática de notícias.

---

### 3. Vianda Marmitex

**Tecnologias:** HTML5, CSS3 e JavaScript

Cardápio online da Vianda Marmitex, restaurante de comida caseira em Vicente Pires (DF). O site apresenta as marmitas e as bebidas e leva o cliente a fazer o pedido pelo WhatsApp. O layout foi inspirado em aplicativos de delivery.

**Estrutura da página:**

- **Cabeçalho fixo:** logo, tempo estimado de entrega e botão de telefone.
- **Abas e atalhos:** Marmitas, Bebidas, Mais pedidos e Fazer pedido.
- **Banner:** foto das opções do cardápio.
- **Marmitas:** cards com foto, descrição e preço de cada prato.
- **Bebidas:** refrigerante, suco e água mineral com e sem gás.
- **Sacola de pedido:** área lateral com formulário de envio para o WhatsApp.

**Pratos apresentados:**

- Frango grelhado.
- Bisteca suína.
- Parmegiana de frango.
- Strogonoff de frango.
- Coxa e sobrecoxa.
- Bife grelhado.
- Bife à cavalo.
- Feijoada.

**Formulário de pedido:**

O cliente escreve o pedido e a forma de pagamento em um campo de texto. Ao clicar em "Enviar pedido no WhatsApp", a mensagem é aberta já endereçada ao número do restaurante.

**JavaScript:**

O arquivo `script.js` começa a montar a sacola de compras. Quando o cliente clica no botão **"+"** de um produto, o script lê o nome e o preço no card, converte o preço de texto para número e guarda o item em um array.

**Layout responsivo:**

No computador, a página usa CSS Grid com duas colunas: o cardápio e a sacola. Em telas com até 980 px, a sacola passa para baixo do cardápio e a página fica com uma coluna só.

**Observação:** a sacola ainda está em desenvolvimento. Por enquanto, os itens adicionados aparecem apenas no console do navegador. Exibir a sacola na tela, somar o total e gerar a mensagem do WhatsApp automaticamente estão previstos como melhorias futuras. O site não processa pagamentos e não armazena pedidos.

---

## 🧰 Tecnologias e conceitos

Os projetos trabalham os seguintes recursos:

| Tecnologia / conceito | Aplicação |
|---|---|
| Portugol | Lógica de programação e controle de estoque |
| Estruturas condicionais e de repetição | Menu, seleção de produtos e validação de dados |
| HTML5 | Estruturação de páginas e conteúdo |
| Tabelas, listas e links | Organização das informações nos sites |
| CSS3 | Estilização, identidade visual, Flexbox, Grid e responsividade |
| Formulários | Envio do pedido da Vianda Marmitex pelo WhatsApp |
| JavaScript | Eventos, manipulação do DOM e arrays na sacola de pedidos |

---

## ▶️ Como executar

Cada projeto tem sua própria forma de execução:

- **Controle de Estoque:** abra o arquivo `.por` no [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/) ou no [Portugol Webstudio](https://portugol.dev/) e execute o programa.
- **Call of Duty:** abra o arquivo `site.html` da versão desejada em um navegador. Na versão HTML + CSS, mantenha o `style.css` e as imagens na mesma pasta do HTML.
- **Vianda Marmitex:** abra o arquivo `index.html` em um navegador, mantendo `style.css`, `script.js` e as imagens na mesma pasta. Para ver a sacola funcionando, abra o console do navegador (F12). A extensão Live Server do Visual Studio Code também pode ser usada durante o desenvolvimento.

Cada pasta tem um `README.md` com mais detalhes sobre a estrutura e a execução do projeto.

---

## 🎯 Objetivo do portfólio

Reunir projetos que mostram a aplicação prática de conhecimentos em lógica de programação e desenvolvimento web, registrando a evolução do aprendizado: da lógica em Portugol ao HTML puro, depois ao HTML com CSS e, por fim, ao JavaScript.

---

**Autor:** Robson de Almeida Morais Rocha  
**Instituição:** SENAI 
**Idioma da documentação:** Português (Brasil)
