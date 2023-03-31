const {Type} = require ("../db.js")
const axios = require('axios')


const allTypes = async () => {
    try {
        const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
        const pokemonTypes = getTypes.data.result.map((type) => {
            return {
                nombre: type.nombre,
            };
        });
        
        const dtbase = pokemonTypes.forEach((el) => {
            TypeError.findOrCreate ({
                where: {
                    name: el.name,
                },
            });
        });
        return dtbase
    } catch (error) {
        console.log({error: "No hay tipos disponibles en la base de datos"})
    }
};

module.exports = {allTypes};