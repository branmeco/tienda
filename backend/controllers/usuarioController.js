let Usuario = require('../models/usuario');
let bcrypt = require('bcrypt-nodejs');

const registro_usuario_admin = async function(req, res) {
    let data = req.body;

    bcrypt.hash('123456', null, null, async function(err, hash){
        if(err){
            res.status(200).send({data:undefined, message: 'No se pudo encriptar la contraseña'});
        } else {
            data.password = hash;
            let usuario = await Usuario.create(data);
            res.status(200).send({data: usuario});
        }
    });
}

module.exports = {
    registro_usuario_admin
}
