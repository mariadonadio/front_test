"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ModelClienteSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        default: 'nuevo'
    },
    cuit: {
        type: Number,
        required: true,
        default: null
    },
    email: {
        type: String,
        required: true,
        default: null
    },
    address: {
        type: String,
        required: true,
        default: null
    },
    phone: {
        type: Number,
        required: true,
        default: null
    },
    ri: {
        type: Boolean,
        required: true,
        default: null
    }
}, { collection: 'provider' });
exports.default = mongoose_1.model('provider', exports.ModelClienteSchema);
