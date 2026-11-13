import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Estoque estoque = new Estoque();
        NumberFormat moeda = NumberFormat.getCurrencyInstance(Locale.forLanguageTag("pt-BR"));

        try (Scanner entrada = new Scanner(System.in)) {
            while (true) {
                System.out.println("\n1 - Consultar estoque\n2 - Retirar produto\n3 - Sair");
                try {
                    switch (lerInteiro(entrada, "Escolha: ")) {
                        case 1 -> listar(estoque, moeda);
                        case 2 -> {
                            listar(estoque, moeda);
                            Produto produto = estoque.buscar(lerInteiro(entrada, "Código: "));
                            int unidades = lerInteiro(entrada, "Quantidade: ");
                            System.out.println("Total da retirada: " + moeda.format(produto.retirar(unidades)));
                        }
                        case 3 -> { return; }
                        default -> System.out.println("Opção inválida.");
                    }
                } catch (IllegalArgumentException erro) {
                    System.out.println(erro.getMessage());
                } catch (java.util.NoSuchElementException fim) {
                    return;
                }
            }
        }
    }

    private static void listar(Estoque estoque, NumberFormat moeda) {
        for (Produto produto : estoque.produtos()) {
            System.out.printf("%d - %s | %d un. | %s%n",
                produto.codigo, produto.nome, produto.quantidade(), moeda.format(produto.preco));
        }
    }

    private static int lerInteiro(Scanner entrada, String mensagem) {
        System.out.print(mensagem);
        try {
            return Integer.parseInt(entrada.nextLine().trim());
        } catch (NumberFormatException erro) {
            throw new IllegalArgumentException("Digite um número inteiro.");
        }
    }
}
