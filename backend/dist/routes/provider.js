"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provider_model_1 = __importDefault(require("../models/provider.model"));
const router = express_1.Router();
router.get('/cuit', (req, res) => {
    provider_model_1.default.find({})
        .select('cuit')
        .exec((err1, uDB) => {
        if (err1)
            return res.status(500).json({
                success: false,
                message: `Error al realizar la peticion`,
                error: err1
            });
        if (!uDB)
            return res.status(404).json({
                success: false,
                message: `No providers to show`
            });
        res.status(200).json({
            success: true,
            quantity: uDB.length,
            providers: uDB
        });
    });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    provider_model_1.default.findById(id)
        .exec((err1, uDB) => {
        if (err1) {
            return res.status(500).json({
                success: false,
                err: err1
            });
        }
        if (uDB) {
            return res.status(200).json({
                success: true,
                provider: uDB
            });
        }
        else {
            return res.status(200).json({
                success: false,
                provider: null
            });
        }
    });
});
router.get('/', (req, res) => {
    provider_model_1.default.find({}, (err1, uDB) => {
        if (err1)
            return res.status(500).json({
                success: false,
                message: `Error al realizar la peticion`,
                error: err1
            });
        if (!uDB)
            return res.status(404).json({
                success: false,
                message: `No providers to show`
            });
        res.status(200).json({
            success: true,
            quantity: uDB.length,
            providers: uDB
        });
    });
});
router.post('/', function (req, res) {
    let body = req.body;
    let newProvider = new provider_model_1.default({
        name: body.name,
        cuit: body.cuit,
        email: body.email,
        address: body.address,
        phone: body.phone,
        ri: body.ri
    });
    newProvider.save((err1, uDB) => {
        if (err1) {
            return res.status(500).json({
                success: false,
                error: err1
            });
        }
        return res.status(201).json({
            success: true,
            provider: uDB
        });
    });
});
router.put('/:id', function (req, res) {
    let id = req.params.id;
    let update = req.body;
    provider_model_1.default.findByIdAndUpdate(id, update, { new: true, runValidators: true }, (err1, uDB) => {
        if (err1) {
            return res.status(500).json({
                success: false,
                err1
            });
        }
        res.json({
            success: true,
            provider: uDB
        });
    });
});
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    provider_model_1.default.findById(id, (err, obj) => {
        if (err) {
            return res.status(500).json({
                success: false,
                err
            });
        }
        ;
        if (!obj) {
            return res.status(400).json({
                success: false,
                err: {
                    message: 'Provider not found'
                }
            });
        }
        ;
        obj.remove(err => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: `Error al borrar Proveedor:`
                });
            }
            return res.status(200).send({
                success: true,
                message: 'Proveedor fue eliminado'
            });
        });
    });
});
exports.default = router;
