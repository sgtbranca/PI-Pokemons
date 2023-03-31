const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {
      id: {
        type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,     
      primaryKey: true,
      allowNull : false,
      },
      nombre: {
        type: DataTypes.STRING,
        unique: true,
      }
    })
  };