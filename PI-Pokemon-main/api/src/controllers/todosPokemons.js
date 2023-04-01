const { pokemonapi } = require ("./pokemonAPI")
const{ dataBasePokemons } = require("./pokemonDB")


const todosPokemons = async () => {
    try {
      
      const pokemonApi = await pokemonapi();
      // console.log(pokemonApi);
      const pokemonDb = await dataBasePokemons();
      const dbApipoke = pokemonDb?[...pokemonApi,...pokemonDb] : pokemonapi
      

      return dbApipoke
    }catch (error)
    {
      console.log({error : "Error en todos los pokemons"})
    }

}


module.exports = {todosPokemons};