"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Rotas
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('index');
});
exports.default = router;
