const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('Client', {
  businessName: {
      type: DataTypes.STRING,
      allowNull: false
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cnpj:{
    type: DataTypes.STRING
  },
  phone:{
    type: DataTypes.STRING
  },
  email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
  },
});

Client.associate = (models) => {
  Client.hasMany(models.Freight, {
    foreignKey: 'clientId'
  })
}

module.exports = Client;