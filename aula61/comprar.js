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

async function comprar(dados_compra) {
    const dados_compra = [
        dados_compra.id_cliente, 
        dados_compra.livros, 
        dados_compra.data, 
        dados_compra.valor
    ];
    
    try {
        await db.query("BEGIN;");

        const { rows } = await db.query(format(`INSERT INTO compras (id_cliente, livros, data, valor) VALUES ($1, $2, $3, $4)`), dados_compra);

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


const dados_compra = {
    id_cliente: "",
    livros: "",
    data: "",
    valor: ""
}

comprar(dados_compra)