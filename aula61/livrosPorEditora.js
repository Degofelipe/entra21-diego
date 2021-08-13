const db = require("./db");
const format = require("pg-format");

// 10) Crie uma função livrosPorEditora(id_editora) que retorna todos os livros 
// fornecidos por uma editora.

async function livrosPorEditora(id_editora) {
    try {
        await db.query("BEGIN;");

        const { rows } = await db.query(format(``));
        
        await db.query(format(``));

        await db.query(" COMMIT;");
        console.log("Compras fazidas com sucesso!");
    } catch (error) {
        await db.query("ROLLBACK;")
        console.log(error.message);
    } finally {
        db.end();
    }
}

const id_editora = [
    "0951a547-9ce7-4e7c-9f3f-ad00758ced3f",
    "1b9b41bd-4889-437a-8b1a-09a8ad0b4d12",
    "2fda9f61-b83c-448b-991c-78bfffa80a59",
    "97edee82-6136-4bff-ac54-b00cc34c2667",
    "bff62d30-8e75-4e58-8fb2-6c6cc33b767c"
]

livrosPorEditora(id_editora);