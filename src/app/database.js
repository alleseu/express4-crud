const mongoose = require('mongoose');

connect = async () => {
    try {
        const uri = 'mongodb://localhost:27017/db_express4';
    
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepAlive: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    
        await mongoose.connect(uri, options);
    
        console.log('Conexión exitosa a la BD.');
    }
    catch (error) {
        console.log('Error de conexión a la BD:', error);
    }
}

module.exports = connect();