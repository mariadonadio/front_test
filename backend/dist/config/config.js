"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment = {
    //======================
    // PORT
    //======================
    PORT: Number(process.env.PORT) || 9020,
    //======================
    // DB
    //======================
    MNG_DB_URL: process.env.MNG_DB_URL || 'localhost:27017/test',
    MNG_DB_USER: process.env.MNG_DB_USER || '',
    MNG_DB_PASS: process.env.MNG_DB_PASS || '',
    VERSION: '1.0.0'
};
exports.default = environment;
