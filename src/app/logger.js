const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

//Se define formato personalizado.
const format = '[:date[clf]] - ":method :url" - :remote-addr - ":user-agent" - :status - :response-time ms - :res[content-length]';

//Crea una secuencia de escritura que rota diariamente.
const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, '..', '..', 'log')
});

//Registra las solicitudes HTTP con el siguiente formato ( :method :url :status :response-time ms - :res[content-length] ), en el directorio /log.
module.exports = morgan(format, { stream: accessLogStream });
