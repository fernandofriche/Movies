const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "fern4ndo_16",
  database: "movies",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL!");
});

app.post("/register", (req, res) => {
  const { nome_usuario, email, senha } = req.body;

  const query = `INSERT INTO usuario (nome_usuario, email, senha) VALUES (?, ?, ?)`;
  connection.query(query, [nome_usuario, email, senha], (err, result) => {
    if (err) {
      console.error("Erro ao registrar usuário:", err);
      return res.status(500).send("Erro ao registrar usuário.");
    }
    res.status(200).send("Usuário registrado com sucesso.");
  });
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const query = `SELECT * FROM usuario WHERE email = ? AND senha = ?`;
  connection.query(query, [email, senha], (err, result) => {
    if (err) {
      console.error("Erro ao fazer login:", err);
      return res.status(500).send("Erro ao fazer login.");
    }
    if (result.length > 0) {
      res.status(200).send({ message: "Login bem-sucedido", auth: true });
    } else {
      res.status(401).send({ message: "Credenciais inválidas", auth: false });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
