const {Router} = require("express")
const {Type} = require ("../db.js")
const {getTypes} = require("../Controllers/pokemonType")
const router = Router()



router.get("/", async (req,res)=>{
    try {
       await getTypes();
    
        const types = await Type.findAll();   
       
        res.status(200).json(types);
      } catch (e) {
        res.status(400).send(e.toString()), console.log(e, "Error en el controlador getTypes");
      }
})
module.exports = router;