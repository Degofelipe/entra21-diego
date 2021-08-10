-- INSERT INTO produtos (nome, preco) VALUES
-- ('Lápis', 1),
-- ('Caneta', 2.5),
-- ('Regua', 3);

-- INSERT INTO pedidos (total_pedido) VALUES
-- (10), (10), (30), (6);

-- INSERT INTO pedidos_produtos VALUES
-- (1, 1, 10),
-- (2, 2, 4),
-- (3, 3, 10),
-- (3 , 2, 2);


CREATE TABLE IF NOT EXISTS vendas(
	id SERIAL PRIMARY KEY,
	nome_vendedor text NOT NULL,
	quantidade integer NOT NULL,
	produto text NOT NULL,
	cidade text NOT NULL
);

-- INSERT INTO vendas(nome_vendedor, quantidade, produto, cidade) VALUES
-- ('jorge', 10, 'mouse', 'sao paulo'),
-- ('ana', 6, 'teclado', 'rio de janeiro'),
-- ('mario', 23, 'mouse', 'blumenau'),
-- ('felipe', 25, 'webcam', 'blumenau'),
-- ('joao', 2, 'teclado', 'recife'),
-- ('pedro', 3, 'monitor', 'sao paulo'),
-- ('joao', 5, 'monitor', 'rio de janeiro');

SELECT cidade, sum(quantidade)
FROM vendas
GROUP BY cidade;

SELECT nome_vendedor , sum(quantidade)
FROM vendas
GROUP BY nome_vendedor
ORDER BY total_venda DESC;