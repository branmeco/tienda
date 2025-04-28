let express = require('express');
let usuarioController = require('../controllers/usuarioController');
let authenticate = require('../middlewares/authenticate');

let api = express.Router();

api.post('/registro_usuario_admin', authenticate.decodeToken, usuarioController.registro_usuario_admin);
api.post('/login_usuario', usuarioController.login_usuario);

module.exports = api;