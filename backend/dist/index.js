"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const provider_1 = __importDefault(require("./routes/provider"));
const server = server_1.default.instance;
const allowedOrigins = [
    '*'
];
server.app.use(body_parser_1.default.urlencoded({ extended: false }));
server.app.use(body_parser_1.default.json());
server.app.use(cors_1.default({ origin: "*" }));
server.app.use('/api/provider', provider_1.default);
server.start(() => {
    console.log(`Test BackEnd listening on port: ${server.port}`);
});
