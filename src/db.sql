CREATE DATABASE casadocodigo;
USE casadocodigo;
CREATE TABLE livros(
  id INT(11) NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) DEFAULT NULL,
  descricao TEXT,
  preco DECIMAL(10,2) DEFAULT NULL,
  PRIMARY KEY (id)
);  

INSERT INTO livros(titulo, descricao, preco) VALUES('Começando com nodejs', 'Livro introdutório sobre nodejs', 39.90);
INSERT INTO livros(titulo, descricao, preco) VALUES('Começando com javascript', 'Livro introdutório sobre javascript', 39.90);
INSERT INTO livros(titulo, descricao, preco) VALUES('Começando com express', 'Livro introdutório sobre express', 39.90);