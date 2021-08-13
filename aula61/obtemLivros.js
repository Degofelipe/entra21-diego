const db = require("./db");
const format = require("pg-format");

// 7) Crie uma função obtemLivros(livros) que recebe como parâmetro um vetor com
// identificadores de livros. Essa função deve retornar um vetor com todos os 
// livros presentes no parâmetro.

async function obtemLivros(livros) {
    try {        
        const {rows} = await db.query(format(`SELECT nome_autor, assunto FROM livros WHERE isbn IN (%L)`, livros));
        console.log(rows);
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
}

const livros = [
    "01a14476-5fbc-496f-bdf3-930e6d936198",
    "3e728325-7902-4b04-a195-18c91bbb3f28",
    "7150cc0d-fdb4-44a3-9493-d79830fb2082",
    "77dec9e9-9a56-40c0-8d65-20a892f96e72",
    "f16035bf-f668-40e7-b81a-eb97dab1684a"
];

obtemLivros(livros);


