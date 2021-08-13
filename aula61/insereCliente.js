const db = require("./db");
const format = require("pg-format");

// 3) Crie uma função insereCliente(cliente) que recebe o objeto cliente:
// {
//     nome,
//     email,
//     telefone,
//     numero_documento,
//     tipo_pessoa,
//     rua,
//     numero,
//     cidade,
//     estado,
//     cep
// }

async function insereCliente(cliente) {
    const dadosCliente = [
        cliente.nome, 
        cliente.email, 
        cliente.telefone, 
        cliente.numero_documento,
        cliente.tipo_pessoa
    ];
    const enderecoCliente = [
        cliente.rua,
        cliente.numero,
        cliente.cidade,
        cliente.estado,
        cliente.cep
    ];
    try {
        await db.query("BEGIN;");

        const {rows} = await db.query(`            
            INSERT INTO 
                clientes (nome, email, telefone, numero_documento, tipo_pessoa)
            VALUES 
                ($1, $2, $3, $4, $5)
            RETURNING id;`, dadosCliente);
        
        await db.query(`
            INSERT INTO 
                enderecos (rua, numero, cidade, estado, cep, id_cliente)
            VALUES 
                ($1, $2, $3, $4, $5, $6);`, [...enderecoCliente, rows[0].id]);

        await db.query(" COMMIT;");        
        console.log("Cliente foi cadastrado com sucesso!");
    } catch (error) {
        await db.query("ROLLBACK;")
        console.log(error.message);
    } finally {
        db.end();
    }
}

const cliente = {
    nome: "João",
    email: "joao@email.com",
    telefone: "(47)9 9999-9999",
    numero_documento: "112.545.123-54",
    tipo_pessoa: "PF",
    rua: "Rua 1",
    numero: "1",
    cidade: "Rodeio",
    estado: "SC",
    cep: "19213-000"
}

insereCliente(cliente);