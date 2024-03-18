const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Outros middlewares, se necessário

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
// Outras rotas, se necessário

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const db = require('./database');
db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
