let express = require('express');
let usuarioController = require('../controllers/usuarioController');

let api = express.Router();

api.post('/registro_usuario_admin', usuarioController.registro_usuario_admin);

module.exports = api;