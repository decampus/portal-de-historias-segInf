const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PEPPER = process.env.PEPPER;

app.get('/', (req, res) => {
  res.redirect('/cadastro.html');
});


// Rota de cadastro
app.post('/cadastrar', async (req, res) => {
  const { nome, email, senha } = req.body;

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const senhaPepper = senha + PEPPER;
  const senhaHash = await bcrypt.hash(salt + senhaPepper, saltRounds);

  const hashFinal = `${salt}:${senhaHash}`;

  try {
    await pool.query(
      'INSERT INTO usuarios (nome, email, senha_hash) VALUES ($1, $2, $3)',
      [nome, email, hashFinal]
    );
    res.send('Cadastro realizado com sucesso!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao cadastrar usuário.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
