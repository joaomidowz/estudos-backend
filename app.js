const express = require("express");
const userRouter = require("./userRoutes");

const app = express();

app.user("/api", userRouter);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
