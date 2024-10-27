const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const car = sequelize.define('Car', {
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  
  cpf:{
    type: DataTypes.STRING
  },
  phone:{
    type: DataTypes.STRING
  },
  cep:{
    type: DataTypes.STRING
  },
  street:{
    type: DataTypes.STRING
  },
  number:{
    type: DataTypes.STRING
  },
  neighborhood:{
    type: DataTypes.STRING
  },
  city:{
    type: DataTypes.STRING
  },
  uf:{
    type: DataTypes.STRING
  }
});

module.exports = User;