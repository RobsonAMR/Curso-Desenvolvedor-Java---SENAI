# 📦 Controle de Estoque (Portugol)

Programa de terminal escrito em **Portugol** que controla o estoque de produtos de informática. O usuário consulta as quantidades disponíveis e registra retiradas, e o programa calcula o valor total de cada retirada.

> Exercício de lógica de programação do curso Desenvolvedor Java (turma vespertina) no SENAI Taguatinga.

## ⚙️ Como funciona

O programa mostra um menu que se repete até o usuário escolher sair:

```
===== CONTROLE DE ESTOQUE =====
1 - Consultar estoque
2 - Retirar produto
3 - Sair
```

1. **Consultar estoque:** lista a quantidade atual de cada produto.
2. **Retirar produto:** o usuário escolhe o produto pelo código e informa a quantidade. Se houver estoque suficiente, o programa diminui a quantidade e mostra o valor total da retirada.
3. **Sair:** encerra o programa.

Opções e códigos inválidos geram mensagem de erro, assim como quantidades maiores que o estoque.

## 🗂️ Produtos cadastrados

| Código | Produto | Estoque inicial | Preço unitário |
|:---:|---|:---:|---:|
| 1 | Teclado | 40 | R$ 25,00 |
| 2 | Mouse | 20 | R$ 12,50 |
| 3 | Monitor | 25 | R$ 650,00 |
| 4 | Notebook | 10 | R$ 2.500,00 |
| 5 | Pendrive | 50 | R$ 150,00 |
| 6 | Computador | 25 | R$ 3.500,00 |

## 🧠 Conceitos praticados

- Variáveis dos tipos `inteiro`, `real` e `cadeia`
- Entrada e saída de dados (`leia` e `escreva`)
- Laço de repetição `enquanto` para manter o menu ativo
- Estruturas de decisão `se`, `senao se` e `senao`
- Estrutura `escolha`/`caso` para selecionar o produto
- Operadores lógicos (`e`) e relacionais para validar código e quantidade
- Cálculo do valor total (`quantidade × preço`)

## ▶️ Como executar

1. Instale o [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/) ou use o [Portugol Webstudio](https://portugol.dev/) direto no navegador.
2. Abra o arquivo `controle de estoque.por`.
3. Clique em **Executar** e use o menu no console.

## 🚀 Ideias de melhoria

- [ ] Opção para **repor** (dar entrada em) produtos
- [ ] Guardar produtos e preços em **vetores**, em vez de uma variável para cada item
- [ ] Mostrar o **valor total do estoque**
- [ ] Reescrever o programa em **Java**
