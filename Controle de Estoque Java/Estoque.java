import java.util.List;

final class Estoque {
    private final List<Produto> produtos = List.of(
        new Produto(1, "Teclado", "25.00", 40),
        new Produto(2, "Mouse", "12.50", 20),
        new Produto(3, "Monitor", "650.00", 25),
        new Produto(4, "Notebook", "2500.00", 10),
        new Produto(5, "Pendrive", "150.00", 50),
        new Produto(6, "Computador", "3500.00", 25)
    );

    List<Produto> produtos() {
        return produtos;
    }

    Produto buscar(int codigo) {
        return produtos.stream()
            .filter(produto -> produto.codigo == codigo)
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Código de produto inválido."));
    }
}
