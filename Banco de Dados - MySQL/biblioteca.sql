USE biblioteca_db;
SHOW TABLES ;
CREATE TABLE autores (
 id_autor INT AUTO_INCREMENT PRIMARY
KEY,
nome VARCHAR(120) NOT NULL,
 pais VARCHAR(60)
);
CREATE TABLE livros (
 id_livro INT AUTO_INCREMENT PRIMARY
KEY,
 titulo VARCHAR(150) NOT NULL,
 ano_publicacao INT,
 preco DECIMAL(8,2) NOT NULL,
 id_autor INT,
 CONSTRAINT fk_livros_autores
 FOREIGN KEY (id_autor) REFERENCES
autores(id_autor)
);
INSERT INTO autores (nome, pais) VALUES
 ('Machado de Assis', 'Brasil'),
 ('Clarice Lispector', 'Brasil'),
 ('George Orwell', 'Reino Unido');
 
 INSERT INTO livros (titulo,
ano_publicacao, preco, id_autor) VALUES
 ('Dom Casmurro', 1899, 39.90, 1),
 ('Memórias Póstumas de Brás Cubas',
1881, 42.50, 1),
 ('A Hora da Estrela', 1977, 35.00,
2),
 ('1984', 1949, 49.90, 3);

SELECT titulo, ano_publicacao, preco
FROM livros
WHERE ano_publicacao >= 1900
ORDER BY preco DESC;

-- Consulta combinando tabelas com JOIN
SELECT l.titulo, a.nome AS autor,
l.preco
FROM livros l
INNER JOIN autores a ON l.id_autor =
a.id_autor;

-- Aumenta em 10% o preço dos livros com preço menor que 40.00
UPDATE livros
SET preco = ROUND(preco * 1.10, 2)
WHERE preco < 40.00;

-- Remove um registro específico pelo ID

DELETE FROM livros
WHERE id_livro = 3;

-- DESAFIO 01 ---
ALTER TABLE livros
ADD COLUMN estoque INT NOT NULL DEFAULT 0;

SELECT * FROM livros;

-- DESAFIO 02 --

SELECT autores.nome, COUNT(livros.id_livro) AS quantidade_livros
FROM autores
LEFT JOIN livros ON autores.id_autor = livros.id_autor
GROUP BY autores.id_autor, autores.nome;
