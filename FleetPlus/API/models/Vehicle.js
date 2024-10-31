const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = sequelize.define('Vehicle', {
  model: {
      type: DataTypes.STRING,
      allowNull: false
  },
  automaker:{
    type: DataTypes.STRING
  },
  year:{
    type: DataTypes.INTEGER
  },
  fuelType:{
    type: DataTypes.STRING
  },
  mileage:{
    type: DataTypes.INTEGER
  },
});

Vehicle.associate = (models) => {
  Vehicle.hasMany(models.Fueling, {
    foreignKey: 'vehicleId'
  })
}

module.exports = Vehicle;