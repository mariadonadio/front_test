import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import environment from '../config/config';

export default class Server {

    private static _instance: Server;

    private _app: express.Application;
    private _port: Number;

    public get app():express.Application {
        return this._app;
    }

    public set app(app:express.Application) {
        this._app = app;
    }

    public get port():Number {
        return this._port;
    }

    constructor() {

        this._app = express();
        this._port = <Number>environment.PORT;

        this.setupMngDB();

    }

    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../www');
        this.app.use(express.static(publicPath));
    }

    public start( callback: (...args: any[]) => void ) {
        this._app.listen( this._port, callback );
        this.publicFolder();
    }

    private setupMngDB(): void {

        const MNG_DB_URI = `mongodb://${environment.MNG_DB_USER}:${environment.MNG_DB_PASS}@${environment.MNG_DB_URL}`;

        mongoose.connect(MNG_DB_URI, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true }).then(
            () => {
                console.log('Data Base OnLine');
            },
            err => {
                console.log('Data Base Connection Error');
                throw err;
            }
        );

    }

}




