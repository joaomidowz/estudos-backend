const sequelize = require("./database");

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("conexão com o banco de dados estabelecida com sucesso");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:'", err);
  }
}

testConnection();
