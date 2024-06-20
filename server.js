const express = require('express');
const mysql = require('mysql2'); // alterar aqui
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // substitua pelo seu usuário do MySQL
    password: 'tallis0506', // substitua pela sua senha do MySQL
    database: 'sistema_residencias'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Rota para cadastrar casa
app.post('/cadastrar', (req, res) => {
    let data = req.body;
    let sql = 'INSERT INTO casas SET ?';
    let query = db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send('Casa cadastrada com sucesso!');
    });
});

// Rota para atualizar casa
app.put('/atualizar/:id', (req, res) => {
    let sql = `UPDATE casas SET ? WHERE id = ${req.params.id}`;
    let query = db.query(sql, req.body, (err, result) => {
        if (err) throw err;
        res.send('Casa atualizada com sucesso!');
    });
});

// Rota para remover casa
app.delete('/remover/:id', (req, res) => {
    let sql = `DELETE FROM casas WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Casa removida com sucesso!');
    });
});

// Rota para buscar todas as casas
app.get('/casas', (req, res) => {
    let sql = 'SELECT * FROM casas';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
