const axios = require("axios")


const pokemonapi = async ()=>{

  try {
    const pokemones =  await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40");
    const pokeNombreURL = pokemones.data.results
    const pokeCompletado = await axios.all(
      pokeNombreURL.map(async (pokeInd) => {
          let infoPush = await axios.get(pokeInd.url);
          return {
            id: infoPush.data.id,
            nombre: infoPush.data.name,
            vida: infoPush.data.stats[0].base_stat,
            ataque: infoPush.data.stats[1].base_stat,
            defensa: infoPush.data.stats[2].base_stat,
            imagen: infoPush.data.sprites.other.dream_world.front_default,
            types: infoPush.data.types.map((type) => type.type.name), 
          }
        })
      )
      return pokeCompletado
    }
    catch (error) {
    console.log({error:"Error al traer los pokemones desde los controladores"});
}
}

module.exports={ pokemonapi };