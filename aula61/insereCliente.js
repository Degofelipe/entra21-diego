const db = require("./db");
const format = require("pg-format");

async function insereCliente(cliente) {
    try {
        const clienteVetor = [cliente.nome, cliente.email, cliente.telefone, cliente.numero_doc, cliente.tipo_pessoa];        
        const query = "INSERT INTO clientes (nome, email, telefone, numero_doc, tipo_pessoa) VALUES ($1, $2, $3, $4, $5) RETURNING id";
        const { rows } = await db.query(query, clienteVetor);        
        const endereco = [cliente.rua, cliente.numero, cliente.cidade, cliente.estado, cliente.cep, rows[0].id];
        await db.query("INSERT INTO enderecos (rua, numero, cidades, estado, cep, id_cliente) VALUES ($1, $2, $3, $4, $5, $6)", endereco);
            console.log("usuário inserido!");
        } catch (error) {
        console.log(error.message);
        } finally {
            db.end();
        }
}

const cliente = {
    nome: "João",
    email: "joao@email.com",
    telefone: "(47)9 9999-9999",
    numero_doc: "112.545.123-54",
    tipo_pessoa: "PF",
    rua: "Rua 1",
    numero: "1",
    cidade: "Rodeio",
    estado: "SC",
    cep: "19213-000"
}

insereCliente(cliente);