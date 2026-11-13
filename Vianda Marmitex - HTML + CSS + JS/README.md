# 🍱 Vianda Marmitex (HTML + CSS + JS)

Cardápio online da **Vianda Marmitex**, restaurante de comida caseira em Vicente Pires (DF). O cliente vê as marmitas e as bebidas, monta o pedido e envia direto pelo **WhatsApp**.

Esta é a versão mais nova do site: layout novo, inspirado em apps de delivery, com uma **sacola de pedido** ao lado do cardápio e os primeiros passos em **JavaScript**.

> Projeto do curso Desenvolvedor Java (turma vespertina) no SENAI Taguatinga.

## ✨ Funcionalidades

- **Cabeçalho fixo** com logo, tempo de entrega (10 a 30 min) e botão de telefone
- **Abas e atalhos** (Marmitas, Bebidas, Mais pedidos, Fazer pedido)
- **Banner** com foto das opções do cardápio
- **Marmitas:** frango grelhado, bisteca suína, parmegiana de frango, strogonoff de frango, coxa e sobrecoxa, bife grelhado, bife à cavalo e feijoada (de R$ 24,00 a R$ 26,00)
- **Bebidas:** refrigerante, suco e água mineral com e sem gás
- **Sacola de pedido:** formulário que envia a mensagem pronta para o WhatsApp do restaurante
- **Layout responsivo:** no celular, as colunas viram uma só (`@media (max-width: 980px)`)

## 🧩 JavaScript (em desenvolvimento)

O arquivo `script.js` começa a montar a **sacola de compras**:

1. Seleciona todos os botões **"+"** dos produtos (`querySelectorAll(".add")`).
2. Ao clicar, pega o **nome** e o **preço** do card (`closest`, `querySelector`, `textContent`).
3. Converte o preço de texto para número (`replace` + `parseFloat`).
4. Adiciona o item no array `sacola` e mostra no console (`console.log`).

**Próximo passo:** exibir os itens da sacola na tela, somar o total e preencher a mensagem do WhatsApp automaticamente.

## 🛠️ Tecnologias

- HTML5 semântico (`header`, `main`, `aside`, `form`, `footer`)
- CSS3: **Grid**, Flexbox, `position: sticky` e media queries
- JavaScript: DOM, eventos (`addEventListener`), arrays e objetos
- [Font Awesome](https://fontawesome.com/) para o ícone do WhatsApp

## 📁 Arquivos

```
Vianda Marmitex - HTML + CSS + JS/
├── index.html          # Estrutura da página
├── style.css           # Estilos
├── script.js           # Lógica da sacola de pedido
├── logo.jpg / logo_horizontal.jpg / vianda_marmitex icone.jpg
└── *.jpg / *.jpeg      # Fotos dos pratos e das bebidas
```

## ▶️ Como abrir

Abra o arquivo `index.html` no navegador. Para ver o JavaScript funcionando, abra o **console** (F12 ou Cmd + Option + J) e clique nos botões **"+"** dos produtos.

## 🚀 Próximos passos

- [ ] Mostrar a sacola na tela, com quantidade e total
- [ ] Botão para remover itens da sacola
- [ ] Gerar a mensagem do WhatsApp a partir da sacola
- [ ] Destacar automaticamente o cardápio do dia

## 📞 Contato

Pedidos pelo WhatsApp: [(61) 3253-8736](https://wa.me/556132538736)
