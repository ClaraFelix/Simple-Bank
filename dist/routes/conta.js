"use strict";
//Todas as rotas para delete create register delete e update
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Rotas
const router = express_1.Router();
//registro
router.route('/register')
    .get((req, res) => {
    res.render('conta/register');
})
    .post((req, res) => {
    const { email, senha } = req.body;
    console.log(email, senha);
    res.send('Sua conta Simple Bank foi criada com sucesso');
});
//login
router.route('/login')
    .get((req, res) => {
    res.render('conta/login');
})
    .post((req, res) => {
    console.log(req.body);
    res.send('Seja Bem vindo a sua conta Simple Bank');
});
//saldo
router.route('/saldo')
    .get((req, res) => {
    res.render('conta/saldo');
})
    .post((req, res) => {
    console.log(req.body);
    res.send('Seu saldo é 0,00');
});
//extrato
router.route('/extrato')
    .get((req, res) => {
    res.render('conta/extrato');
})
    .post((req, res) => {
    console.log(req.body);
    res.send('A conta não possui movimentação');
});
exports.default = router;
