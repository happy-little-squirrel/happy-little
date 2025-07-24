const { connection } = require('../db');

exports.login = (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ success: false, message: 'Необходимы имя пользователя и пароль' });
  }

  const query = 'SELECT * FROM users WHERE login = ? AND password = ?';
  
  connection.query(query, [login, password], (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Ошибка базы данных' });
    }
    
    if (results.length > 0) {
      res.json({ success: true, message: 'Авторизация успешна' });
    } else {
      res.status(401).json({ success: false, message: 'Неверные учетные данные' });
    }
  });
};
