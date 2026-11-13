# Controle de estoque em Java

Versão em Java do [exercício de estoque em Portugol](../Controle%20de%20Estoque%20Portugol/README.md). O programa permite consultar seis produtos de informática e registrar retiradas pelo terminal. A retirada atualiza o saldo e mostra o total em reais. O estoque volta aos valores iniciais a cada execução.

## Como executar

Com JDK 17 ou superior, abra o terminal nesta pasta e execute:

```sh
javac -encoding UTF-8 -d out Main.java Estoque.java Produto.java
java -cp out Main
```

Escolha **1** para consultar o estoque ou **2** para registrar uma retirada. Por exemplo, retirar 3 unidades do produto de código 2 (Mouse) custa R$ 37,50 e reduz o saldo de 20 para 17.

## Estrutura

- `Main.java` apresenta o menu e lê as entradas.
- `Estoque.java` reúne o catálogo e busca produtos por código.
- `Produto.java` valida a retirada e calcula o total com `BigDecimal`.
