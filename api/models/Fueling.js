const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Fueling = sequelize.define('Fueling',{
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id',
        }
    },
    driverId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Driver',
            key: 'id',
        }
    },
    vehicleId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Vehicle',
            key: 'id',
        }
    },
    liters: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    price:{
        type: DataTypes.DOUBLE(10,2),
        allowNull: false
    },
    mileage:{
        type: DataTypes.DOUBLE(10,2),
        allowNull: false
    },
    dateFueling:{
        type: DataTypes.DATE(10,2),
        allowNull: false
    }
});

Fueling.associate = (models)=> {
    Fueling.belongsTo(models.Category,{
        foreignKey: ['userId','driverId', 'vehicleId']
    });
}
module.exports = User;