const { Pokemon, Type } = require("../db");

const nuevoPokemon = async (params) => {
  const createdPokemon = await Pokemon.create({
    nombre: params.name,
    vida: params.hp,
    ataque: params.attack,
    defensa: params.defense,
    img: params.img ? params.img : "https://images3.alphacoders.com/677/677583.png",
  });
  createdPokemon.addType(params.types);
};

module.exports = { nuevoPokemon };