const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fleetplus', 'root', '', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('Conectado com sucesso');
})
.catch(err => {
    console.log('Error a conectar com banco ' + err)
})

module.exports = sequelize;