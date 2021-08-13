const db = require("./db");
const format = require("pg-format");

// 5) Crie uma função insereEditoras(editoras) que recebe um vetor de editoras:
// editora = {
//     nome_gerente,
//     telefone
// }
// e insere essas editoras no banco de dados.
// Utilize essa função para criar 5 editoras.

async function insereEditoras(editoras) {
    const editorasVetor = []
    for (let editora of editoras) {
        editorasVetor.push([editora.nome_gerente, editora.telefone]);
    }
    console.log(editorasVetor);
    try {
        const query = format("INSERT INTO editoras (nome_gerente, telefone) VALUES %L RETURNING id", editorasVetor);
        const { rows } = await db.query(query);
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
}


const editoras = [
    {
    nome_gerente:"Paulo",
    telefone: "(47) 9 1234-1234"
    },
    {   
    nome_gerente:"Paula",
    telefone: "(47) 9 1235-1235"
    },
    {
    nome_gerente:"Marcio",
    telefone: "(47) 9 1231-1231"
    },
    {
    nome_gerente:"Marcia",
    telefone: "(47) 9 1230-1230"
    },
    {
    nome_gerente:"Adélio",
    telefone: "(47) 9 1244-1244"
    }
]

insereEditoras(editoras);