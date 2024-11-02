const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
    cep:{
        type: DataTypes.STRING
      },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    road:{
    type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    complement:{
        type: DataTypes.STRING,
        allowNull: false
    }
    });

    Address.associate = (models) => {
    Address.hasMany(models.User,Client,Driver, {
    foreignKey: 'addressId'
    })
    }

module.exports = Address;