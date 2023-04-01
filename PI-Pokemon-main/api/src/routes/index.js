const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRoutes = require("./pokemonRoutes")
const pokemonTypes = require("./pokemonTypes") 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons" , pokemonRoutes)
router.use("/types" , pokemonTypes)

module.exports = router;
