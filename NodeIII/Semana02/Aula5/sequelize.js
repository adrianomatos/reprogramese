// npm install sqlite3
// npm install sequelize
// Biblioteca
const { Sequelize, Model, DataTypes } = require("sequelize");
// Conexão
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

// Definindo classe SETOR
class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        idsetor: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },

        nome: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        ramal: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },

        email: {
          type: DataTypes.STRING(30),
        },
      },
      { sequelize, modelName: "setor", tableName: "setores" }
    );
  }
}
// Inicialização do modelo table setor
Setor.init(sequelize);

// Definindo classe FUNCIONARIO
class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        matricula: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },

        idsetor: {
          type: DataTypes.INTEGER,
          references: {
            model: Setor,
            key: "idsetor",
          },
        },

        nome: {
          type: DataTypes.STRING(60),
          allowNull: false,
        },

        nascimento: {
          type: DataTypes.DATE,
        },

        telefone: {
          type: DataTypes.STRING(15),
        },
      },
      { sequelize, modelName: "funcionario", tableName: "funcionarios" }
    );
  }
}
// Inicialização do modelo table funcionario
Funcionario.init(sequelize);

// Sincronismo
(async () => {
  await sequelize.sync({ force: true });

  // ----------------------------------------- SETOR -----------------------------------
  // Usando o CREATE
  const setor_create = await Setor.create({
    nome: "Financeiro",
    ramal: "2134",
    email: "financeiro@empresa.com",
  });
  const setor_create_S = await Setor.create({
    nome: "Secretaria",
    ramal: "2135",
    email: "secretaria@empresa.com",
  });
  const setor_create_P = await Setor.create({
    nome: "Portaria",
    ramal: "2136",
    email: "portaria@empresa.com",
  });
  const setor_create_C = await Setor.create({
    nome: "Contabilidade",
    ramal: "1111",
    email: "Contabilidade@empresa.com",
  });
  const setor_create_D = await Setor.create({
    nome: "Diretoria",
    ramal: "2222",
    email: "Diretoria @empresa.com",
  });
  const setor_create_R = await Setor.create({
    nome: "Recursos humanos",
    ramal: "3333",
    email: "rh@empresa.com",
  });

  // Usando o READ
  const setores_listar = await Setor.findAll();
  // console.log("Lista de setores:\n", JSON.stringify(setores_listar, null, 2), "\n\n");
  // console.log("Lista de setores:\n", JSON.stringify(setores_listar, ['idsetor'], 2), "\n\n");
  // console.log("Lista de setores:\n", JSON.stringify(setores_listar, ['nome'], 2), "\n\n");
  console.log(
    "Lista de setores:\n",
    JSON.stringify(setores_listar, ["nome", "ramal"], 2),
    "\n\n"
  );

  // Usando o UPDATE
  const setor_chave = await Setor.findByPk(3);
  setor_chave.nome = "Estoque";
  const resultado = await setor_chave.save();
  console.log(resultado);

  // ----------------------- Usando o UPDATE - Altere o nome do setor RH para Departamento Pessoal.
  const setor_chaveRH = await Setor.findByPk(6);
  setor_chaveRH.nome = "Departamento Pessoal";
  const resultadoRH = await setor_chaveRH.save();
  console.log(resultadoRH);

  // REIMPRIMINDO NOVAMENTE DEPOIS DA ATUALIZAÇÃO - Usando o READ
  const setores_update = await Setor.findAll();
  console.log(
    "Lista de setores Atualiza:\n",
    JSON.stringify(setores_update, null, 2),
    "\n\n"
  );

  // Usando DELETE
  const setor_delete = await Setor.findByPk(1); //(exclusão do ítem 1)
  setor_delete.destroy();

  // ------------------------- Usando DELETE - Exclusão do setor Contabilidade do banco de dados.
  const setor_deleteC = await Setor.findByPk(4); //(ítem 4)
  setor_deleteC.destroy();

  // REIMPRIMINDO NOVAMENTE DEPOIS DA EXCLUSÃO - Usando o READ
  const setores_exclusao = await Setor.findAll();
  console.log(
    "Lista de setores Atualiza após exclusão:\n",
    JSON.stringify(setores_exclusao, null, 2),
    "\n\n"
  );

  // ----------------------------------------- FUNCIONARIO -----------------------------------
  // Usando o CREATE
  const funcionario_create = await Funcionario.create({
    idsetor: 2,
    nome: "Adriano",
    nascimento: "1986-02-18",
    telefone: "88981935976",
  });
  const funcionario_create1 = await Funcionario.create({
    idsetor: 3,
    nome: "Noemy",
    nascimento: "2000-01-10",
    telefone: "88999887766",
  });
  const funcionario_create2 = await Funcionario.create({
    idsetor: 2,
    nome: "Rebeca",
    nascimento: "1988-08-31",
    telefone: "88955443322",
  });
  const funcionario_create3 = await Funcionario.create({
    idsetor: 3,
    nome: "Thyago",
    nascimento: "2000-01-20",
    telefone: "88999887700",
  });

  // Usando o READ
  const funcionarios_listar = await Funcionario.findAll();
  console.log(
    "Lista de funcionarios:\n",
    JSON.stringify(funcionarios_listar, null, 2),
    "\n\n"
  );
})();
