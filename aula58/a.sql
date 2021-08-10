-- CREATE TABLE IF NOT EXISTS vendas (
--  	id_nf integer,
--  	id_item integer,
-- 	cod_prod integer,
-- 	valor_unit numeric NOT NULL,
-- 	quantidade integer NOT NULL,
--  	desconto integer,
-- 	PRIMARY KEY (id_nf, id_item, cod_prod)
-- );

-- INSERT INTO vendas (id_nf, id_item, cod_prod, valor_unit, quantidade, desconto) VALUES
--  (1, 1, 1, 25.00, 10, 5),
--  (1, 2, 2, 13.00, 3, null),
--  (1, 3, 3, 15.00, 2, null),
--  (1, 4, 4, 10.00, 1, null),
--  (1, 5, 5, 30.00, 1, null),
--  (2, 1, 3, 15.00, 4, null),
--  (2, 2, 4, 10.00, 5, null),
--  (2, 3, 5, 30.00, 7, null),
--  (3, 1, 1, 25.00, 5, null),
--  (3, 2, 4, 10.00, 4, null),
--  (3, 3, 5, 30.00, 5, null),
--  (3, 4, 2, 13.50, 7, null),
--  (4, 1, 5, 30.00, 10, 15),
--  (4, 2, 4, 10.00, 12, 5),
--  (4, 3, 1, 25.00, 13, 5),
--  (4, 4, 2, 13.00, 15, 5),
--  (5, 1, 3, 15.00, 3, null),
--  (5, 2, 5, 30.00, 6, null),
--  (6, 1, 1, 25.00, 22, 15),
--  (6, 2, 3, 15.00, 25, 20),
--  (7, 1, 1, 25.00, 10, 3),
--  (7, 2, 2, 13.50, 10, 4),
--  (7, 3, 3, 15.00, 10, 4),
--  (7, 4, 5, 30.00, 10, 1);

--A>-----------------------------------

SELECT id_nf, id_item, cod_prod, valor_unit FROM vendas
WHERE desconto is null;

--B>---------------------------------

SELECT 
	id_nf, 
	id_item, 
	cod_prod, 
	valor_unit, 
	ROUND (valor_unit - (valor_unit /100 * desconto),2) valor_vendido
FROM vendas
WHERE desconto is NOT NULL;

--C>----------------------------------
UPDATE vendas SET desconto = 0 WHERE desconto is null;
SELECT * FROM vendas
ORDER BY id_nf;

--D>---------------------------------

SELECT 
	id_nf, 
	id_item, 
	cod_prod, 
	valor_unit,
	desconto,
	ROUND (valor_unit - (valor_unit /100 * desconto),2) valor_vendido,
	quantidade,
	ROUND (quantidade * (valor_unit - (valor_unit /100 * desconto)),2) valor_total
FROM vendas;

--E>----------------------------------

SELECT 
	id_nf, 
	sum(ROUND (quantidade * (valor_unit - (valor_unit /100 * desconto)),2)) valor_total
FROM vendas
GROUP BY id_nf
ORDER BY id_nf DESC;

--F>---------------------------------

SELECT 
	id_nf,
	sum(ROUND (valor_unit - (valor_unit /100 * desconto),2)) valor_vendido
FROM vendas
GROUP BY id_nf
ORDER BY valor_vendido DESC;

--G>----------------------------------

SELECT cod_prod, sum(quantidade) quant_vendas
FROM vendas
GROUP BY cod_prod
ORDER BY quant_vendas DESC LIMIT 1;

--H>---------------------------------

SELECT id_nf, cod_prod, sum(quantidade) 
FROM vendas
WHERE quantidade >= 10
GROUP BY id_nf, cod_prod;

--I>---------------------------------

SELECT 
	id_nf,
	sum(ROUND (quantidade * (valor_unit - (valor_unit /100 * desconto)),2)) valor_total
FROM vendas
GROUP BY id_nf
HAVING SUM((ROUND (quantidade * (valor_unit - (valor_unit /100 * desconto)),2))) > 500
ORDER BY valor_total DESC;

--J>---------------------------------

SELECT 
	sum(cod_prod), 
	(ROUND(avg(desconto), 2)) media
FROM vendas
GROUP BY cod_prod;

--K>---------------------------------

SELECT 
	sum(cod_prod),
	MIN (desconto) menor_desc,
	(ROUND(avg(desconto), 2)) media,
	MAX (desconto) maior_desc
FROM vendas	
GROUP BY cod_prod;


--L>---------------------------------

SELECT
	id_nf,
	count(id_item) quantidade_itens
FROM vendas
GROUP BY id_nf
HAVING count(id_item) > 3
ORDER BY id_nf;

--2-A>---------------------------------

