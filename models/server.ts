import express from "express";
import cors from "cors";

import db from "../db/config";

import router from "../routes/naves.routes";

 class Server {
    private app : express.Application;
    private port : string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT as string

        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    async dbConnection(){
        try {
            
            await db.authenticate();
            console.log('Database connected sucessfully');
        } catch (error) {
            console.log(error)
            throw new Error("would not connect to database");
            
            
        }
    }

    middlewares(){
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public'));
    }
    routes(){
        this.app.use( '/api/naves',  router);
    }
    listen(){
        this.app.listen(this.port, ()=> {
            console.log('server running in the port '+this.port );
        })

    }

}


export default Server;