let express = require('express');
let mongoose = require('mongoose');
let bodyparser = require('body-parser');

let port = process.env.port || 4201
let app = express();

app.use(express.json({limit: '50mb'})); //Para analizar cuerpos JSON grandes
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

let cliente_router = require('./routes/cliente');
let usuario_router = require('./routes/usuario');

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

    app.use((req, res, next)=>{
        res.header('Access-Control-Allow-Origin','*'); 
        res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
        res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
        next();
    });
    
app.use('/api', cliente_router);
app.use('/api', usuario_router);

module.exports = app;