const express = require("express");
const routes = require("../src/routes/routes")

server = express()

server.use(express.json())
server.use("/",routes)


module.exports = server