const express = require('express');
const { dbConnection } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT

        this.user = '/api/user'
        this.login = '/api/login'

        //conectar a base de datos
        this.conectarDB()

        //middlewares
        this.middlewares()

        // Lectura y parseo del body
        this.app.use(express.json())

        //routes
        this.routes();

        // Lectura y parseo del body
        this.app.use(express.json())

    }

    async conectarDB() {
        await dbConnection()
    }
  

    middlewares() {
        //CORS
        // this.app.use(cors())

        //Directorio Publico
        this.app.use(express.static('public'))
        
    
    }

    routes() {
        this.app.use(this.user, require('../routes/user'));
        this.app.use(this.login, require('../routes/login'));
       
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("SERVIDOR CORRIENDO EN EL PUERTO", this.port)
        })
    }

}


module.exports = Server





