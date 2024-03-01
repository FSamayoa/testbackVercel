const {Router} =require("express")
const {obtenerContactos} = require ("../../controllers/controllerGet")

const routes = Router()

routes.get("/", obtenerContactos);


module.exports = routes