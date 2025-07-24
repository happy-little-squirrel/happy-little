require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { connection } = require('./db')

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Ошибка базы данных');
    }
    res.send(`Ответ от MySQL: ${results[0].solution}`);
  });
});

app.use('/api', require('./routes/index'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Что-то сломалось!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});