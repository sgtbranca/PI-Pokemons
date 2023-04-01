const { Router } = require("express")
const {todosPokemons} = require("../Controllers/todosPokemons")
const {nuevoPokemon} = require("../Controllers/pokemonCreador")
const router = Router()


router.get("/", async(req,res)=>{
   try {
      const { nombre } = req.query
      const pokemonsList = await todosPokemons()
      if(nombre){
         const pokeSelect = await pokemonsList.filter((poke)=> poke.nombre === nombre.toLowerCase() )
         if(pokeSelect.length > 0){
            res.status(200).json(pokeSelect)
         }else{
            res.status(404).send("Not found")
         }
      }else{
         res.json(pokemonsList)
      }
   } catch (error) {
      res.status(400).json({error:"error al traer los pokemons"})
   }
})
router.get("/:id",async (req,res)=>{
   try {
      const { id } = req.params
      const pokeList = await todosPokemons();
         if(id){
        const  selectedPoke = await pokeList.filter(( obj ) =>  obj.id == id );
          if(selectedPoke.length > 0) {
              res.status(200).json(selectedPoke)
              }
           else {
              res.status(400).send("El id ingresado no corresponde a ningun pokemon")
                }
              }
               
  }catch (error) {res.status(400).json({error : error.message })}
  });

  router.get("/name?=", async(req,res)=>{
      try {
         const { name } = req.query
         const pokemonsList = await allPokemon();
         if(name){
            const pokeSelect = await pokemonsList.filter((poke)=> poke.name === name.toLowerCase() )
            if(pokeSelect.length > 0){
               res.status(200).json(pokeSelect)
            }else{
               res.status(404).send("Not found")
            }
         }
       } catch (error) {
         res.status(400).send("Error al conectar con los controllers")
       }
   })
   router.get("/name?=", async(req,res)=>{
      try {
         const { name } = req.query
         const pokemonsList = await allPokemon();
         if(name){const pokeSelect = await pokemonsList.filter((poke)=> poke.name === name.toLowerCase())
            if(pokeSelect.length > 0){
               res.status(200).json(pokeSelect)
            }else{
               res.status(404).send("Not found")
            }
         }
      }catch (error){
         res.status(400).send("Error en conectar con los controladores")
      }
   })

router.post("/", async (req,res)=>{
   try {
      await nuevoPokemon(req.body);
      res.json("Tu pokemon se creo exitosamente");
    } catch (e) {
      res.status(400).send(e.toString()),
        console.log(e, "Error en Controller");
    }
})

module.exports = router;