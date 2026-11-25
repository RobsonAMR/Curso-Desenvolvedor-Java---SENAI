# 📚 Sistema de Biblioteca — MySQL

Projeto desenvolvido durante o curso **Desenvolvedor Java — SENAI**, no componente curricular de Banco de Dados.

## 🎯 Objetivo

Praticar os conceitos de bancos de dados relacionais e a linguagem SQL, utilizando um sistema de gerenciamento de livros e autores.

## 🛠️ Tecnologias utilizadas

- MySQL 8.0
- MySQL Workbench
- SQL

## 📋 Funcionalidades

- Criação de banco de dados e tabelas.
- Cadastro de livros e autores.
- Relacionamento entre tabelas.
- Consultas com filtros e ordenação.
- Atualização de preços dos livros.
- Exclusão de registros.
- Adição de coluna de estoque.
- Contagem de livros cadastrados por autor.

## 🗃️ Estrutura do banco de dados

**Banco de dados:** `biblioteca_db`

### Tabela autores

| Campo | Tipo |
|---|---|
| id_autor | INT — PRIMARY KEY |
| nome | VARCHAR(120) |
| pais | VARCHAR(60) |

### Tabela livros

| Campo | Tipo |
|---|---|
| id_livro | INT — PRIMARY KEY |
| titulo | VARCHAR(150) |
| ano_publicacao | INT |
| preco | DECIMAL(8,2) |
| id_autor | INT — FOREIGN KEY |
| estoque | INT |

## 💻 Comandos SQL praticados

| Comando | Finalidade |
|---|---|
| CREATE DATABASE | Criar banco de dados |
| CREATE TABLE | Criar tabelas |
| INSERT INTO | Inserir registros |
| SELECT | Consultar registros |
| WHERE | Filtrar informações |
| ORDER BY | Ordenar resultados |
| INNER JOIN | Combinar tabelas |
| LEFT JOIN | Consultar registros com ou sem correspondência |
| UPDATE | Atualizar registros |
| DELETE | Excluir registros |
| ALTER TABLE | Alterar a estrutura da tabela |
| COUNT | Contar registros |
| GROUP BY | Agrupar resultados |

## 🧩 Desafios práticos

### Desafio A — Controle de estoque

Adicionar uma coluna de estoque à tabela livros utilizando ALTER TABLE, com valor padrão igual a zero.

### Desafio B — Livros por autor

Listar todos os autores e a quantidade de livros cadastrados, incluindo autores que não possuem livros, utilizando COUNT, GROUP BY e LEFT JOIN.

## 🚀 Como executar

1. Instale o MySQL Server e o MySQL Workbench.
2. Abra uma conexão com o servidor MySQL.
3. Crie o banco de dados `biblioteca_db`, caso ainda não exista.
4. Abra o arquivo `biblioteca.sql`.
5. Execute os comandos na ordem apresentada em um banco sem as tabelas previamente criadas.

## 📁 Arquivos do projeto

- [biblioteca.sql](./biblioteca.sql) — Código SQL completo da atividade.
- README.md — Documentação do projeto.

## 📖 Conhecimentos adquiridos

- Modelagem de bancos de dados relacionais.
- Chaves primárias e estrangeiras.
- Integridade referencial.
- Manipulação e consulta de dados.
- Relacionamentos entre tabelas.
- Funções de agregação.

---

**Curso:** Desenvolvedor Java — SENAI

**Componente curricular:** Banco de Dados

**Ano:** 2026

Projeto desenvolvido para fins educacionais e evolução profissional na área de desenvolvimento de sistemas.
