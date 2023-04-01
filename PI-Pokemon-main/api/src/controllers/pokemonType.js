const {Type} = require ("../db.js")
const axios = require('axios')


const getTypes = async () => {
    try {
        const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
        const pokemonType = getTypes.data.results.map((type) => {
          return {
            name: type.name,
          };
        });
        const dtbase = pokemonType.forEach((el) => {
            Type.findOrCreate({
              where: {
                name: el.name,
              },
            });
          });
        return dtbase
        } catch (error) {
          console.log({error: "Tipos de pokemones no disponibles en la base de datos"});
        }
      };


module.exports = {getTypes}