import java.math.BigDecimal;

final class Produto {
    final int codigo;
    final String nome;
    final BigDecimal preco;
    private int quantidade;

    Produto(int codigo, String nome, String preco, int quantidade) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = new BigDecimal(preco);
        this.quantidade = quantidade;
    }

    int quantidade() {
        return quantidade;
    }

    BigDecimal retirar(int unidades) {
        if (unidades <= 0 || unidades > quantidade) {
            throw new IllegalArgumentException("Quantidade inválida ou estoque insuficiente.");
        }
        quantidade -= unidades;
        return preco.multiply(BigDecimal.valueOf(unidades));
    }
}
