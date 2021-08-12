const db = require("./db");
const format = require("pg-format");

// 4) Crie uma função insereClientes(clientes) que recebe um vetor de clientes
// e insere esses clientes no banco de dados.
// (Deve inserir o registro na tabela clientes e na tabela enderecos).

async function insereClientes(clientes) {
    try {
        const clientesVetor = [[clientes.nome, clientes.email, clientes.telefone, clientes.numero_doc, clientes.tipo_pessoa]] ;
        const query = format("INSERT INTO clientes (nome, email, telefone, numero_doc, tipo_pessoa) VALUES %L RETURNING id", clientesVetor);
        console.log()
        const { rows } = await db.query(query);
        console.log(rows);
        const endereco = [clientes.rua, clientes.numero, clientes.cidade, clientes.estado, clientes.cep, rows[0].id];
        await db.query ("INSERT INTO enderecos (rua, numero, cidades, estado, cep, id_cliente) VALUES", endereco);    
            console.log(res.rows);
        } catch (error) {
            console.log(error.message);
        } finally {
            db.end();
        }
}

const clientes = [{
    nome: "Carlos",
    email: "carlos@email.com",
    telefone: "(47)9 9999-888",
    numero_doc: "118.545.123-58",
    tipo_pessoa: "PF",
    rua: "Rua 2",
    numero: "2",
    cidade: "Timbó",
    estado: "SC",
    cep: "19213-111"
},
{
    nome: "Carlas",
    email: "carlas@email.com",
    telefone: "(47)9 9999-7777",
    numero_doc: "112.545.123-77",
    tipo_pessoa: "PF",
    rua: "Rua 3",
    numero: "3",
    cidade: "Blumenau",
    estado: "SC",
    cep: "19213-010"
},
{
    nome: "Pedro",
    email: "pedro@email.com",
    telefone: "(47)9 9999-6666",
    numero_doc: "112.545.123-66",
    tipo_pessoa: "PF",
    rua: "Rua 4",
    numero: "4",
    cidade: "Indaial",
    estado: "SC",
    cep: "19211-000"
},
{
    nome: "Gepeto",
    email: "gepeto@email.com",
    telefone: "(47)9 9999-6654",
    numero_doc: "112.225.123-54",
    tipo_pessoa: "PF",
    rua: "Rua 4",
    numero: "5",
    cidade: "Pomerode",
    estado: "SC",
    cep: "19213-434"
}
]

insereClientes(clientes);