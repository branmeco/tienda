let express = require('express');
let clienteController = require('../controllers/clienteController')

let api = express.Router();

api.get('/testing', clienteController.testing);

module.exports = api;