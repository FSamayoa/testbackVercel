const express = require("express");
const routes = require("../src/routes/routes")

server = express()


server.use("/api",routes)


module.exports = server