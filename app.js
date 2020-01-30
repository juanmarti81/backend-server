// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Inicializar variables
var app = express();

//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Importación de rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require("./routes/usuario");
var loginRoutes = require("./routes/login");

//Conexión a la DB
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) =>{
    if (err) throw err;
     console.log("Base de Datos: \x1b[32m%s\x1b[0m", "online");
})

//Rutas
app.use("/usuario", usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express Server. Puerto 3000: \x1b[32m%s\x1b[0m', 'online')
});
