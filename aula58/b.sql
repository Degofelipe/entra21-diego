CREATE TABLE IF NOT EXISTS departamento (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	localizacao text NOT NULL,
	id_gerente integer
);

CREATE TABLE IF NOT EXISTS funcionarios (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL,
	sobrenome text NOT NULL,
	data_nascimento date NOT NULL,
	cpf text NOT NULL,
	rg text NOT NULL,
	logradouro text NOT NULL,
	cep text NOT NULL,
	cidade text NOT NULL,
	telefone text NOT NULL,
	funcao text NOT NULL,
	salario numeric NOT NULL,
	id_departamento integer NOT NULL,
	FOREIGN KEY (id_departamento) REFERENCES departamento (id)
);





