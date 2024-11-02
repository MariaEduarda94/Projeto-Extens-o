const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
  },
  cpf:{
    type: DataTypes.STRING
  },
  phone:{
    type: DataTypes.STRING
  },
});

User.associate = (models) => {
  User.hasMany(models.Fueling, {
    foreignKey: 'userId'
  })
}
User.associate = (models)=> {
  User.belongsTo(models.Address,{
      foreignKey: 'addressId'
  });
}

module.exports = User;