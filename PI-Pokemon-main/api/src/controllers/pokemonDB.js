const { Pokemon ,Type } = require ("../db.js")



const dataBasePokemons = async () => {
    try { 
     const pokesEnDB = await Pokemon.findAll({
       include : Type,
    })  
       
     return pokesEnDB.map((pokemon)=>{
      return{
         id:pokemon.id,
         nombre:pokemon.name,
         imagen:pokemon.image,
         vida:pokemon.hp,
         ataque: pokemon.attack,
         defensa: pokemon.defense,
         types:pokemon.types.map((type)=>type.name),
         createdInDb:pokemon.createdInDb
      }
     })

    } catch (error) {
     console.log({error : "pokemons no disponibles en base de datos"})
    }
     
 }
 module.exports = {dataBasePokemons}