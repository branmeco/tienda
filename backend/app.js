let express = require('express');
let mongoose = require('mongoose');

let port = process.env.port || 4201
let app = express();

let cliente_router = require('./routes/cliente')

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tienda')
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
        app.listen(port, () => {
            console.log('Servidor corriendo en el puerto ' + port);
        });
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB', err);
    });
    
app.use('/api', cliente_router);

module.exports = app;