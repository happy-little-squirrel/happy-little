const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к MySQL:', err)
    return
  }
  console.log('Успешное подключение к MySQL!')
})

module.exports = { connection }
