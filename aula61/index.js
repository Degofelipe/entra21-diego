const db = require("./db");
const format = require("pg-format");

(async () => {
    try{
        await db.query(`
        CREATE TABLE IF NOT EXISTS clientes (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome text NOT NULL,
            email text NOT NULL UNIQUE,
            telefone text NOT NULL UNIQUE,
            numero_doc text NOT NULL UNIQUE,
            tipo_pessoa text NOT NULL,
            pontos integer DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS enderecos (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rua text NOT NULL,
            numero integer NOT NULL,
            cidades text NOT NULL,
            estado text NOT NULL,
            cep text NOT NULL,
            id_cliente UUID NOT NULL REFERENCES clientes
        );

        CREATE TABLE IF NOT EXISTS editoras (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome_gerente text NOT NULL,
            telefone text NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS livros (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome_autor text NOT NULL,
            assunto text NOT NULL,
            quantidade_estoque text NOT NULL,
            preco text NOT NULL,
            id_editora UUID NOT NULL REFERENCES editoras
        );
        
        CREATE TABLE IF NOT EXISTS compras (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            id_cliente UUID REFERENCES clientes,
            id_livro UUID REFERENCES livros,
            data date NOT NULL,
            valor numeric NOT NULL
        );
        
        `);
        console.log("Tabela criada com sucesso!");
    } catch(error){
        console.log(error.message);
    } finally {
        db.end();
    }
})();