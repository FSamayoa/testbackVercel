require ('dotenv').config()
const server = require("./src/server")

const port = process.env.PORT || 3010;

server.listen(port, ()=>{
    console.log("server on port: ",port);
    
})
