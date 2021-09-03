const express = require('express');
const cors = require('cors');
const db = require('./app/database');
const logger = require('./app/logger');
const routes = require('./app/routes');

const app = express();
const port = 3003;

//Define la configuración necesaria para evitar que el navegador cierre la conexión entre cliente y servidor.
app.use(cors({
    origin: '*',  //Aqui debemos reemplazar el * por el dominio del cliente.
    optionsSuccessStatus: 200  //Es necesario para navegadores antiguos o algunos SmartTVs.
}));

//Parse application/json y application/x-www-form-urlencoded.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Carga el registrador de solicitudes http.
app.use(logger);

//Carga las rutas definidas.
app.use(routes);

//Inicia el servidor en el puerto especificado.
app.listen(port, () => {
    console.log(`La aplicación está en linea en: http://localhost:${port}/`);
});
