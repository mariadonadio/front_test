"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../config/config"));
class Server {
    constructor() {
        this._app = express_1.default();
        this._port = config_1.default.PORT;
        this.setupMngDB();
    }
    get app() {
        return this._app;
    }
    set app(app) {
        this._app = app;
    }
    get port() {
        return this._port;
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    publicFolder() {
        const publicPath = path_1.default.resolve(__dirname, '../www');
        this.app.use(express_1.default.static(publicPath));
    }
    start(callback) {
        this._app.listen(this._port, callback);
        this.publicFolder();
    }
    setupMngDB() {
        const MNG_DB_URI = `mongodb://${config_1.default.MNG_DB_USER}:${config_1.default.MNG_DB_PASS}@${config_1.default.MNG_DB_URL}`;
        mongoose_1.default.connect(MNG_DB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
            console.log('Data Base OnLine');
        }, err => {
            console.log('Data Base Connection Error');
            throw err;
        });
    }
}
exports.default = Server;
