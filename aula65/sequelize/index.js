const { sequelize, Usuario } = require("./db/models");

(async () => {
    try{

        await sequelize.sync({ force: true });

        await sequelize.authenticate();
        console.log("Conexão bem sucedida");



        //inserindo usuario

        const pedro = await Usuario.create({
            nome:"pedro",
            email: "pedro@email.com",
            senha: "123456"
        });

        console.log("Usuário inserido com sucesso");



        //Inserindo endereço

        await pedro.createEndereco({
            rua:"Rua 01",
            numero: 123
        });
        console.log("Endereço inserido com sucesso");
        


        //inserindo um projeto

        await pedro.createProjeto({
            nome: "Projeto 01",
            quantidadeHoras: 10
        });
        console.log("Projeto inserido com sucesso");


    } catch (error){
        console.error("Erro", error);
    } finally{
        sequelize.close();
    }
})();