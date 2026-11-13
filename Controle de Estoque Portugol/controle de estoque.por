programa {
  funcao inicio() {
 
 //Itens e Declaração das variáveis
   
    inteiro teclado = 40, mouse = 20, monitor = 25
    inteiro notebook = 10, pendrive = 50, computador = 25
   
    inteiro opcao = 0, codigo, qtd, estoque = 0
    real preco = 0.0, total
    cadeia produto = ""


    enquanto (opcao != 3) {


            escreva("\n===== CONTROLE DE ESTOQUE =====\n")
            escreva("1 - Consultar estoque\n")
             escreva("2 - Retirar produto\n")
             escreva("3 - Sair\n")
             escreva("Escolha: ")
                 leia(opcao)


      se (opcao == 1) {
              escreva("\nTeclado: ", teclado)
                   escreva("\nMouse: ", mouse)
                   escreva("\nMonitor: ", monitor)
                    escreva("\nNotebook: ", notebook)
                    escreva("\nPendrive: ", pendrive)
                     escreva("\nComputador: ", computador, "\n")
      }


      senao se (opcao == 2) {


               escreva("\n1 - Teclado")
                escreva("\n2 - Mouse")
                 escreva("\n3 - Monitor")
                 escreva("\n4 - Notebook")
                 escreva("\n5 - Pendrive")
                  escreva("\n6 - Computador")
                  escreva("\nCodigo: ")
                     leia(codigo)


        escolha (codigo) {
               caso 1:
               produto = "Teclado"
               estoque = teclado
               preco = 25.0
               pare
              caso 2:
                 produto = "Mouse"
                 estoque = mouse
                 preco = 12.5
            pare
          caso 3:
            produto = "Monitor"
            estoque = monitor
            preco = 650.0
            pare
          caso 4:
            produto = "Notebook"
            estoque = notebook
            preco = 2500.0
            pare
          caso 5:
            produto = "Pendrive"
            estoque = pendrive
            preco = 150.0
            pare
          caso 6:
            produto = "Computador"
            estoque = computador
            preco = 3500.0
            pare
          caso contrario:
            escreva("Produto invalido!\n")
            estoque = 0
        }


        se (codigo >= 1 e codigo <= 6) {


          escreva("Quantidade: ")
          leia(qtd)


          se (qtd > 0 e qtd <= estoque) {


            escolha (codigo) {
              caso 1:
                teclado = teclado - qtd
                pare
              caso 2:
                mouse = mouse - qtd
                pare
              caso 3:
                monitor = monitor - qtd
                pare
              caso 4:
                notebook = notebook - qtd
                pare
              caso 5:
                pendrive = pendrive - qtd
                pare
              caso 6:
                computador = computador - qtd
                pare
            }


            total = qtd * preco


            escreva("\nProduto: ", produto)
            escreva("\nQuantidade: ", qtd)
            escreva("\nValor total: R$ ", total, "\n")
            escreva("Retirada realizada!\n")


          } senao {
            escreva("Quantidade inválida ou estoque esgotado!\n")
          }
        }
      }


      senao se (opcao == 3) {
        escreva("\nPrograma encerrado!\n")
      }


      senao {
        escreva("\nOpcao inválida!\n")
      }
    }
  }
}
