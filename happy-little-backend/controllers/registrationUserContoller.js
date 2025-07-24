const { connection } = require('../db');

exports.registration = (req, res) => {
    const { login, password, confirmPassword } = req.body;

    if (!login || !password || !confirmPassword) {
        return res.status(400).json({ 
            success: false, 
            message: 'Необходимо заполнить все поля' 
        });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ 
            success: false, 
            message: 'Пароли не совпадают' 
        });
    }

    const checkQuery = 'SELECT * FROM users WHERE login = ?';
    connection.query(checkQuery, [login], (checkErr, checkResults) => {
        if (checkErr) {
            return res.status(500).json({ 
                success: false, 
                message: 'Ошибка при проверке пользователя' 
            });
        } 
        if (checkResults.length > 0) {
        return res.status(409).json({ 
            success: false, 
            message: 'Пользователь с таким логином уже существует' 
        });
        }
        const insertQuery = 'INSERT INTO users (login, password) VALUES (?, ?)';
        connection.query(insertQuery, [login, password], (insertErr, insertResults) => {
            if (insertErr) {
                return res.status(500).json({ 
                    success: false, 
                    message: 'Ошибка при регистрации пользователя' 
                });
            }
            res.json({ 
                success: true, 
                message: 'Регистрация успешно завершена',
                userId: insertResults.insertId 
            });
        });
    });
};