# 🎮 Call of Duty: site de notícias (HTML + CSS)

Versão refeita do site de notícias de **Call of Duty**. O HTML agora só organiza o conteúdo, e todo o visual fica no arquivo **`style.css`**. É a evolução do projeto *Call Of Duty - HTML*, que usava tabelas e atributos antigos.

> Exercício do curso Desenvolvedor Java (turma vespertina) no SENAI Taguatinga.

## 📄 Conteúdo da página

- **Topo** com imagem de fundo e degradê
- **Destaque**: capa do jogo e lista das últimas notícias
- **Gameplay**: miniatura do vídeo com ícone de play e botão "Ver no YouTube"
- **Ranking**: top 3 campeões e principais campeonatos em duas colunas
- **Melhores armas**: tabela com rolagem horizontal no celular
- **Rodapé** com direitos autorais

## 🧱 O que foi praticado

**HTML semântico**
- `header`, `main`, `section` e `footer` no lugar das tabelas de layout
- Classes (`class`) para ligar o HTML ao CSS

**CSS**
- Folha de estilo externa (`<link rel="stylesheet">`)
- **Variáveis CSS** (`:root`) para a paleta militar: oliva, metal, areia, radar e papel
- **Flexbox** para organizar o topo e as colunas
- Imagem de fundo com `linear-gradient` + `url()` e `background-size: cover`
- Fonte responsiva com `clamp()` e unidades `vh` e `vw`
- `text-shadow`, botões estilizados e tabela com rolagem
- Fontes do Google Fonts (Black Ops One, Barlow e Barlow Condensed)

## 🔄 Antes e depois

| | Só HTML | HTML + CSS |
|---|---|---|
| Layout | Tabelas | `section` + Flexbox |
| Cores e fontes | `bgcolor`, `<font>` | `style.css` com variáveis |
| Manutenção | Estilo repetido em cada tag | Um só arquivo de estilo |

## 📁 Arquivos

```
Call Of Duty - HTML + CSS/
├── site.html          # Estrutura da página
├── style.css          # Estilos
├── cod.jpg            # Capa do jogo
├── icon.jpg           # Ícone da aba (favicon)
├── plano de fundo.jpg # Imagem de fundo do topo
└── .vscode/           # Configuração do VS Code
```

## ▶️ Como abrir

Abra o arquivo `site.html` no navegador. Se preferir, use a extensão **Live Server** do VS Code.

---

© 2026 Robson de Almeida. Call of Duty é marca registrada da Activision. Projeto feito para fins de estudo.
