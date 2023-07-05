const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.usuariosPath = '/api/usuarios'
    //middlewares
    this.middlewares();
    //rutas de mi app
    this.routes();

   

  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/users'));
 
  }

middlewares(){
    //directorio publico
    this.app.use(express.static('public'));
    this.app.use(cors());
     //Lectura y parseo del body
     this.app.use(express.json() );

}

  listen() {
    this.app.listen(this.port, () => {
      console.log(`corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
