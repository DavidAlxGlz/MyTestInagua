import  express, { Application }  from "express";
import morgan from 'morgan';

//Routes
import IndexRoutes from "./routes/index.routes";
import TestRoutes  from "./routes/test.routes";


export class App {

   private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    middlewares(){
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/test', TestRoutes);
    }

    async listen(){
       await this.app.listen(this.app.get('port'));
       console.log(`Server on port`,this.app.get('port'));
    }
}