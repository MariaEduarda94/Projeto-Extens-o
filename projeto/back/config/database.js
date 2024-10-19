// config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '10.11.8.40',   
    port: '3306',
    user: 'admin',    
    password: '',  
    database: 'fleetplus' 
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL com sucesso!');
});

module.exports = connection;
