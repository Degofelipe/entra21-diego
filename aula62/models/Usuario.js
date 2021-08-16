const { DataTypes, Sequelize } = require("sequelize");
const { hashSync, compareSync } = require("bcrypt");
const sequelize = require("../database");

const usuario = sequelize.define("Usuario",{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg:"Email inválido"
            }
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("senha", hashSync(value, 10));
        }
    }
},
// {
//     tableName: "usuarios",
//     underscored: true
// }
);


(async () => {
    //Criando a tabela Usuario
    try{
        await usuario.sync({ force:true });
            console.log("Tabela criada com sucesso");

            // inserir um usuario
        const pedro = await usuario.create({
            nome:"Pedro",
            email:"pedro@email.com",
            senha:"123456"
        });
        console.log("Usuário criado com secesso");
        console.log(pedro.toJSON());

        // Modificar o Pedro
        pedro.email = "pedrao@email.com"
        await pedro.save();
        console.log("email atualizado");

        //Remover pedro
        await pedro.destroy();
        console.log("Pedro deletado");

        // Inserindos vario usuários
        const usuarios = await usuario.bulkCreate([
            {
                nome:"Pedro",
                email:"pedro@email.com",
                senha:"123456"
            },
            {
                nome:"José",
                email:"Jose@email.com",
                senha:"123456"
            }
        ]);
        console.log("Usuários criados com sucesso!");
        usuarios.forEach(usuario => console.log(usuario.toJSON()));

        // comparando senhas
        console.log(compareSync("123456", usuarios[0].toJSON().senha));

    } catch (err){
        console.error("Ocorreu um error", err);
    } finally{
        sequelize.close();
    }
})();
