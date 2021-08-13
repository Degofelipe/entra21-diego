const db = require("./db");
const format = require("pg-format");

// 6) Crie uma função insereLivros(livros) que recebe um vetor de livros:
// livro = {
//     isbn,
//     nome_autor,
//     assunto,
//     preco,
//     quantidade_estoque,
//     id_editora
// }
// e insere esses livros no banco de dados.
// Utilize essa função para criar 5 livros.

async function insereLivros(livros) {
    const livrosVetor = []
    for (let livro of livros) {
        livrosVetor.push([livro.nome_autor, livro.assunto, livro.preco, livro.quantidade_estoque, livro.id_editora]);
    }
    console.log(livrosVetor);
    try {
        const query = format("INSERT INTO livros (nome_autor, assunto, preco, quantidade_estoque, id_editora) VALUES %L RETURNING *", livrosVetor);
        const { rows } = await db.query(query);
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
}


const livros = [
    {
    nome_autor:"Paulo O.",
    assunto: "Comédia",
    preco: 20,
    quantidade_estoque:"50",
    id_editora:"0951a547-9ce7-4e7c-9f3f-ad00758ced3f",
    },
    {   
    nome_autor:"Cristóvão G.",
    assunto: "Terror",
    preco: 25,
    quantidade_estoque:"13",
    id_editora:"1b9b41bd-4889-437a-8b1a-09a8ad0b4d12",
    },
    {
    nome_autor:"Marcondes A.",
    assunto: "Programação",
    preco: 120,
    quantidade_estoque:"6",
    id_editora:"2fda9f61-b83c-448b-991c-78bfffa80a59",
    },
    {
    nome_autor:"Luana T.",
    assunto: "Política",
    preco: 40,
    quantidade_estoque:"60",
    id_editora:"97edee82-6136-4bff-ac54-b00cc34c2667",
    },
    {
    nome_autor:"Joana C.",
    assunto: "Romance",
    preco: 15,
    quantidade_estoque:"95",
    id_editora:"bff62d30-8e75-4e58-8fb2-6c6cc33b767c",
    }
]

insereLivros(livros);