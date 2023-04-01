const {Pokemon,Type} = require("../db")


const databaseInfoById = async (id) => {
    try {
      return await Pokemon.findByPk(id,{
        include: {
          model: Type,
        },
      });
    } catch (e) {
      console.log(e, "Error en llamada a base de datos por id");
    }
  };

  module.exports = {databaseInfoById}