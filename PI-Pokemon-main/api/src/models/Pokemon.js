const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,     
      primaryKey: true,
      allowNull : false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    imagen: {
      type:DataTypes.STRING,
      defaultValue :"https://images3.alphacoders.com/677/677583.png" // url imagen
    },
    vida: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    ataque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
};
