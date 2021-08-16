const db = require("./db");
const format = require("pg-format");

// 8) Crie uma função comprar(dados_compra) que recebe um objeto dados_compra
// dados_compra = {
//     id_cliente,
//     livros (vetor com os identificadores dos livros comprados pelo cliente),
//     data (data atual),
//     valor (calculado através do preço dos livros)
// }
// e insere um registro na tabela compras e atualiza os pontos daquele cliente:
// O cliente recebe um ponto a cada 10 reais gastos.

async function obtemLivros(livros) {
    try {
        const {rows} = await db.query(format(`SELECT * FROM livros WHERE isbn IN (%L)`, livros));
        // console.log(rows);
    } catch (error) {
        console.log(error.message);
    }
}
async function comprar(dado_compras) {
    try {
        await db.query("BEGIN;");

        const livros = await obtemLivros(dado_compras.livros);

        let totalLivros = 0;    
        for (let livro of livros) {
            totalLivros += +livro.preco;
            const dados_compra = [
                dado_compras.id_cliente, 
                dado_compras.livros, 
                dado_compras.data, 
                dado_compras.valor
            ];
            await db.query(format(`INSERT INTO compras (id_cliente, id_livro, data, valor) VALUES %L RETURNING id`), dados_compra);
        }
        const { rows } = await db.query("SELECT pontos FROM clientes WHERE id=$1", [dados_compra.id_cliente]);
        
        const pontosAtualizados = parseInt(totalLivros / 10) + rows[0].pontos;
        
        await db.query(format(`UPDATE clientes SET pontos = $1 WHERE id = $2`, [pontosAtualizados, dado_compras.id_cliente]));

        await db.query(" COMMIT;");
        console.log("Compras fazidas com sucesso!");
    } catch (error) {
        await db.query("ROLLBACK;")
        console.log(error.message);
    } finally {
        db.end();
    }
}


const dado_compras = {
    id_cliente: "6a53894b-efc2-48b8-9f30-24d487bf42a5",
    livros: ["f16035bf-f668-40e7-b81a-eb97dab1684a"],
    data: new Date()
}

comprar(dado_compras);